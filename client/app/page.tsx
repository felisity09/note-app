import { useState } from "react";
import prisma from "@/lib/prisma";
import Note from "@/components/Note";
import styles from "@/styles/Notes.module.css";
import { NoteProps } from "@/components/Note";

export default async function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<NoteProps[]>(
    [] as NoteProps[]
  );
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  async function handleSearch() {
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
    setSearchResults(results);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Search notes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.grid}>
        {searchResults.length > 0
          ? searchResults.map((note) => <Note key={note.id} note={note} />)
          : notes.map((note) => <Note key={note.id} note={note} />)}
      </div>
    </main>
  );
}
