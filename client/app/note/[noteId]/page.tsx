"use client";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import NoteDetail from "@/components/NoteDetail";
import { useParams } from "next/navigation";
import { NoteProps } from "@/components/Note";

export default function Note() {
  const params: any = useParams();
  const { noteId } = params;
  const [note, setNote] = useState<NoteProps>({} as NoteProps);

  useEffect(() => {
    const getNote = async (id: string) => {
      try {
        const res = await fetch(`/api/note/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setNote(data);
      } catch (error) {
        throw new Error(String(error));
      }
    };

    getNote(noteId);
  }, [noteId]);

  if (!note) {
    return notFound();
  }

  return <NoteDetail {...note} />;
}
