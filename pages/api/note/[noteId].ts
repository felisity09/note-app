import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("req.query.noteId", req.query.noteId);
  const noteId = Array.isArray(req.query.noteId)
    ? req.query.noteId[0]
    : (req.query.noteId as string);

  if (!noteId) {
    return res.status(400).json({ message: "Note ID not provided" });
  }

  if (req.method === "GET") {
    await handleGet(noteId, res);
  } else if (req.method === "PUT") {
    await handlePut(noteId, req, res);
  } else if (req.method === "DELETE") {
    await handleDelete(noteId, res);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

// GET /api/note/:noteId
async function handleGet(noteId: string, res: NextApiResponse) {
  const note = await prisma.note.findFirst({
    where: { id: noteId },
  });
  return res.json(note);
}

// DELETE /api/note/:noteId
async function handleDelete(noteId: string, res: NextApiResponse) {
  const note = await prisma.note.delete({
    where: { id: noteId },
  });
  res.json(note);
}

// PUT /api/note/:noteId
async function handlePut(
  noteId: string,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;

  const note = await prisma.note.update({
    where: { id: noteId },
    data: {
      title: title,
      content: content,
    },
  });
  return res.json(note);
}
