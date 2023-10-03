"use client";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "../app/notes/Notes.module.css";
import { useRouter } from "next/navigation";

export default function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  const router = useRouter();

  const deleteNote = async (id: string) => {
    try {
      const res = await fetch(`/api/note/${id}`, {
        method: "DELETE",
      });
      console.log("res ===>", res);
    } catch (error) {
      console.log("deleteNote error ===>", error);
      throw new Error(error);
    }
  };

  const handleDeleteClick = (e: React.SyntheticEvent, id: string) => {
    e.preventDefault();

    console.log("e.target ===>", e.target);
    console.log("id", id);
    deleteNote && deleteNote(id);
    // router.refresh();
  };

  // const editNote = async (id: string) => {
  //   try {
  //     const res = await fetch(`/api/note/${id}`, {
  //       method: "PUT",
  //     });
  //     console.log("res ===>", res);
  //   } catch (error) {
  //     console.log("editNote error ===>", error);
  //     throw new Error(error);
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
        <p>{created}</p>
        <button onClick={(e) => handleDeleteClick(e, id)}>Delete</button>
        {/* add button to edit and route to the CreateNote componet with ability to edit */}
        {/* <button onClick={handleEditClick}>Edit</button> */}
      </div>
    </Link>
  );
}
