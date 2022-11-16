import { InterviewPost, UserRole } from "@prisma/client";
import { checkUserRoleAndRedirect } from "lib/checks";
import { getSession } from "next-auth/react";
import { prisma } from "lib/prisma";
import moment from "moment";
import CardShareview from "components/Cards/CardShareview";
import { ShareviewHeader } from "components/Header";

type postprops = {
  posts: InterviewPost[];
};

// export const getServerSideProps = async (context: any) => {
//   const session = await getSession(context);
//   const posts = await prisma.posts.findMany({
//     where: {
//       //@ts-ignore
//       studentId: session?.id,
//     },
//   });

//   return checkUserRoleAndRedirect(context, UserRole.STUDENT, {
//     extra: { posts: JSON.parse(JSON.stringify(posts)) },
//   });
// };

export default function PlMaterialPage({ posts }: postprops) {
  return (
    <div className="bg-slate-100 h-screen p-20">
      {/* {posts.map((post) => ( */}
        {/* <div key={post.id}> */}
        <div className="w-4/3 flex justify-center gap-14">
          
          <div className="p-5 h-fit bg-gray-50 rounded shadow-lg">
          <ul className="flex flex-col">
              <thead>
                <p className="text-md shadow text-center mb-1 font-semibold p-1 h-auto bg-gray-100 text-grey-900 border rounded-lg border-gray-500">Filters 🌪️</p>     
              </thead>
              <tbody className="mt-2 flex flex-col gap-2">
                <li>
                  <a href="#most-liked" className="hover:text-purple-500">Most Liked (↕️)</a>
                </li>
                <li>
                  <a href="#most-commented" className="hover:text-purple-500">Most Commented (↕️)</a>
                </li>
                <li>
                  <a href="#latest" className="hover:text-purple-500">Latest (↕️)</a>
                </li>
                <li className="flex justify-between">
                  <label> Eligibility Criteria: </label>  
                  <select className="text-purple-500 hover:text-blue-500 outline-none">  
                    <option value = "All"> All   
                    </option>  
                    <option value = "GT60"> > 60%   
                    </option>  
                    <option value = "GT70"> > 70%
                    </option>  
                    <option value = "Skoda"> No Backlog  
                    </option>  
                  </select> 
                </li>
                <li className="flex justify-between">
                  <label> Package: </label>  
                  <select className="text-purple-500 hover:text-blue-500 outline-none">  
                    <option value = "All">  All
                    </option>  
                    <option value = "4h"> 4 LPA & higher
                    </option>  
                    <option value = "4l">  4 LPA & lower
                    </option>  
                    <option value = "6h"> 6 LPA & higher
                    </option>  
                    <option value = "6l"> 6 LPA & lower
                    </option>  
                  </select>
                </li>
              </tbody>
          </ul>
          </div>
          <div className = "flex w-3/4 flex-col">
            <ShareviewHeader link1={"pl-material/material"} link2={"pl-material/personalMaterial"} link3={"pl-material/posts/createMaterial"} />
            <div className="flex flex-wrap justify-start overflow-hidden gap-4">
              <div className="">
                <CardShareview link={"pl-material/posts/viewMaterial"} title="Website Development" description="Explore and learn to develop modern web applications" />
              </div>
              <div className="">
                <CardShareview link={"pl-material/posts/viewMaterial"} title="Aptitude Material" description="Explore placement materials referred by your senior batches." />
              </div>
              <div className="">
                <CardShareview link={"pl-material/posts/viewMaterial"} title="Website Development" description="Explore and learn to develop modern web applications" />
              </div>
              <div className="">
                <CardShareview link={"pl-material/posts/viewMaterial"} title="Aptitude Material" description="Explore placement materials referred by your senior batches." />
              </div>
              <div className="">
                <CardShareview link={"pl-material/posts/viewMaterial"} title="Website Development" description="Explore and learn to develop modern web applications" />
              </div>
              <div className="">
                <CardShareview link={"pl-material/posts/viewMaterial"} title="Aptitude Material" description="Explore placement materials referred by your senior batches." />
              </div>
            </div>
          </div>
        </div>
        {/* </div>
      ))} */}
    </div>
  );
}
