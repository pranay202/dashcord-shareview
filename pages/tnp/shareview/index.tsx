import { UserRole } from '@prisma/client';
import TnpLayout from 'components/Layouts/TnpLayout';
import { checkUserRoleAndRedirect } from 'lib/checks';
import { prisma } from 'lib/prisma';
import GlobalFeed from 'components/Shareview/Global';
import { ModifiedExperienceType } from 'lib/interfaces';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export async function getServerSideProps(context: any) {
  const experiences = await prisma.experience.findMany({
    include: { Student: { select: { name: true } } },
  });
  return checkUserRoleAndRedirect(context, UserRole.TNP, {
    extra: { experiences: JSON.parse(JSON.stringify(experiences)) },
  });
}

type ShareviewAdminPageProps = {
  experiences: ModifiedExperienceType[];
};

export default function ShareviewAdminPage({
  experiences,
}: ShareviewAdminPageProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] =
    useState<ModifiedExperienceType[]>();

  async function handleSearch() {
    const res = await axios.post('/api/shareview/search', {
      data: searchQuery,
    });
    if (res.status === 200) {
      setSearchResults(JSON.parse(JSON.stringify(res.data)));
    }
  }

  useEffect(() => {
    if (searchQuery.length >= 3) {
      handleSearch();
    }
  }, [searchQuery]);

  return (
    <TnpLayout>
      <div className='w-full min-h-full lg:min-w-[40rem] lg:min-h-[20rem] rounded-md shadow-none p-4'>
        <h1 className='font-bold text-xl'>Shareview</h1>
        <div className='mt-5 ml-auto'>
          <input
            type='search'
            className='rounded border border-slate-400 bg-slate-100 px-2 w-60'
            placeholder='Search by Tags seprated by commas'
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchResults && (
            <div className='mt-2 bg-white border border-slate-400 rounded z-50 fixed w-60 p-2'>
              {searchResults.map((experience) => (
                <div
                  key={experience.id}
                  className='py-2 border-b border-slate-400'>
                  <Link href={`/tnp/shareview/${experience.id}`}>
                    <a className='hover:text-purple-500 text-lg font-semibold'>
                      {experience.title}
                    </a>
                  </Link>
                  <p className='text-[0.7rem] italic'>
                    Role : {experience.role} | Company : {experience.company} |
                    Package : {experience.salary} LPA | Criteria :{' '}
                    {experience.criteria}%
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <GlobalFeed feed={experiences} forAdmins={true} />
      </div>
    </TnpLayout>
        <em className='text-sm text-slate-400'>Interview Experiences straight from college students</em>
  );
}
