import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

export default async function handleLikes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { id, likes } = await req.body;
    try {
      await prisma.experience.update({
        where: { id: id },
        data: {
          likes: likes + 1,
        },
      });
      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  }

  res.status(405).end();
}
