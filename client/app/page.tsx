import prisma from "@/lib/prisma";
import Image from "next/image";
import Note from "@/components/Note";

export default async function Home() {
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <main
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      {notes?.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </main>
  );
}
