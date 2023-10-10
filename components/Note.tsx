"use client";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/Notes.module.css";

export type NoteProps = {
  id: string;
  title: string;
  content?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export default function Note({ note }: { note: NoteProps }) {
  const { id, title, content, createdAt, updatedAt } = note;

  return (
    <Link href={`/note/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Link>
  );
}
