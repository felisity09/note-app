import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";
import Note from "@/components/Note";
import prisma from "@/lib/prisma";

async function getNotes() {
  const res = await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(res);

  const data = JSON.parse(JSON.stringify(res));
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}
