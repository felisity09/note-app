"use client";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "../../Notes.module.css";

export type NoteProps = {
  id: string;
  title: string;
  content?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export default function Note({ note }: { note: NoteProps }) {
  const { id, title, content, createdAt, updatedAt } = note;
  //   try {
  //     const res = await fetch(`/api/note/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ title, content }),
  //     });
  //     console.log("res ===>", res);
  //   } catch (error) {
  //     console.log("editNote error ===>", error);
  //     throw new Error(String(error));
  //   }
  // };

  // const handleEditClick = (id: string) => {
  //   editNote && editNote(id);
  //   router.refresh();
  // };

  return (
    <Link href={`/note/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Link>
  );
}
