import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await handleGetAllNote(res);
      break;
    case "POST":
      await searchNote(req, res);
      break;
    default:
      res
        .status(405)
        .json({ message: "Method not allowed or have not implemented" });
      break;
  }
}

/*
 * Method: GET
 * DESC: Get all notes
 */
const handleGetAllNote = async (res: NextApiResponse) => {
  const notes = await prisma.note.findMany({
    orderBy: { createdAt: "desc" },
  });
  return res.status(200).json(notes);
};

/*
Method: POST
DESC: Search note
*/
const searchNote = async (req: NextApiRequest, res: NextApiResponse) => {
  const { searchQuery } = req.body;
  const results = await prisma.note.findMany({
    where: {
      OR: [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { content: { contains: searchQuery, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.status(200).json(results);
};
