import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

//POST /api/note
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "Invalid title" });
  }

  try {
    const note = await prisma.note.create({
      data: {
        title,
        content,
      },
    });

    return res.status(201).json(note);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
