import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export type Note = {
  id: number;
  title: string;
  content?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

// GET /api/searchNote?query="search query"
export default async function searchNote(
  req: NextApiRequest,
  res: NextApiResponse<Note[] | { message: string }>
) {
  const { query } = req.query;

  if (!query || typeof query !== "string") {
    return res.status(400).json({ message: "Invalid query parameter" });
  }

  try {
    const notes = await prisma.note.findMany();

    const filteredNotes = notes.filter((note) => {
      const titleMatch = note.title.toLowerCase().includes(query.toLowerCase());
      const contentMatch = note.content
        ? note.content.toLowerCase().includes(query.toLowerCase())
        : false;

      return titleMatch || contentMatch;
    });

    const responseMessage = filteredNotes.length ? filteredNotes : [];

    return res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
