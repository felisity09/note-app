"use client";
import { useState, useEffect } from "react";
import Note from "@/components/Note";
import styles from "@/styles/Notes.module.css";
import { NoteProps } from "@/components/Note";
import Link from "next/link";

export default function Home() {
  const [searchResults, setSearchResults] = useState<NoteProps[]>(
    [] as NoteProps[]
  );
  const [searchQuery, setSearchQuery] = useState("");

  const [notes, setNotes] = useState<NoteProps[]>([]);

  async function fetchAllNotes() {
    const res = await fetch("/api");
    const notes = await res.json();
    console.log(notes);

    setNotes(notes);
  }

  async function handleSearch() {
    const data = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery }),
    });
    const results = await data.json();
    setSearchResults(results);
  }

  useEffect(() => {
    async function handleEffect() {
      if (searchQuery === "") {
        setSearchResults([]);
        await fetchAllNotes();
      } else {
        await handleSearch();
      }
    }
    handleEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search notes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {notes.length !== 0 ? (
        <div className={styles.grid}>
          {searchQuery === "" ? (
            notes.map((note) => <Note key={note.id} note={note} />)
          ) : searchResults.length > 0 ? (
            searchResults.map((note) => <Note key={note.id} note={note} />)
          ) : (
            <div className="text-2xl">No matching note</div>
          )}
        </div>
      ) : (
        <div className="text-2xl">
          No note. Click on
          <Link
            href="/create"
            style={{
              color: "blue",
              textDecoration: "underline",
              fontStyle: "italic",
              margin: "0.25rem",
            }}
          >
            Add Note
          </Link>
          to create note
        </div>
      )}
    </main>
  );
}
