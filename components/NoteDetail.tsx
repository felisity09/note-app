"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NoteProps } from "./Note";

import ReactMarkDown from "react-markdown";

export default function NoteDetail({
  id,
  title,
  content,
  createdAt,
  updatedAt,
}: NoteProps) {
  const router = useRouter();
  const [updatingContent, setUpdatingContent] = useState(false);
  const [updatingTitle, setUpdatingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const destroyNote = async (id: string) => {
    try {
      const res = await fetch(`/api/note/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(String(error));
    }
  };

  const handleDeleteClick = (e: React.SyntheticEvent, id: string) => {
    e.preventDefault();
    destroyNote && destroyNote(id);
    return router.push("/");
  };

  const updateNote = async (id: string) => {
    try {
      const res = await fetch(`/api/note/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });
      const data = await res.json();
      console.log("data ===>", data);
      return data;
    } catch (error) {
      throw new Error(String(error));
    }
  };

  const handleSaveClick = async (e: React.SyntheticEvent, id: string) => {
    const res = await updateNote(id);
    setUpdatingContent(false);
    setUpdatingTitle(false);
    setNewContent(res?.content);
    setNewTitle(res?.title);
    return router.refresh();
  };

  return (
    <div>
      {updatingTitle ? (
        <input
          type="text"
          value={newTitle ?? title ?? ""}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <h1
          onClick={() => {
            setUpdatingTitle(true);
          }}
        >
          {title}
        </h1>
      )}
      <p>{createdAt?.toString()}</p>

      {updatingContent ? (
        <textarea
          value={newContent ?? content ?? ""}
          onChange={(e) => setNewContent(e.target.value)}
        >
          {newContent}
        </textarea>
      ) : (
        <textarea
          onClick={() => {
            setUpdatingContent(true);
          }}
          id="content"
          value={content ?? ""}
        >
          {content}
        </textarea>
      )}

      <button onClick={(e) => handleDeleteClick(e, id)}>Delete</button>
      <button onClick={(e) => handleSaveClick(e, id)}>Save</button>
    </div>
  );
}
