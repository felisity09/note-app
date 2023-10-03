import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id) return res.status(400).end('Missing note "id" query parameter');

  if (Array.isArray(id)) {
    return res
      .status(400)
      .end('Multiple "id" query parameters are not allowed');
  }

  console.log("id ===>", id);

  switch (req.method) {
    case "GET":
      return getNote(id, res);
    case "PUT":
      return updateNote(id, res, req);
    case "DELETE":
      return deleteNote(id, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// GET /api/note/:id
export async function getNote(id: string, res: NextApiResponse) {
  const note = await prisma.note.findUnique({
    where: {
      id: Number(id),
    },
  });
  return res.json(note);
}

// PUT /api/note/:id
async function updateNote(
  id: string,
  res: NextApiResponse,
  req: NextApiRequest
) {
  const note = await prisma.note.update({
    where: {
      id: Number(id),
    },
    data: JSON.parse(req.body),
  });
  return res.json(note);
}

// DELETE /api/note/:id
async function deleteNote(id: string, res: NextApiResponse) {
  const note = await prisma.note.delete({
    where: {
      id: Number(id),
    },
  });
  return res.json(note);
}
