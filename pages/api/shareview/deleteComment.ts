import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

export default async function deleteComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = await req.body;
  try {
    await prisma.comments.delete({ where: { id: id } });
    res.status(200).end();
  } catch (error) {
    res.status(500).end();
  }
}
