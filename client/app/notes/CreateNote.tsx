"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import prisma from "@/lib/prisma";

interface CreateNoteProps {}

const CreateNote: React.FC<CreateNoteProps> = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleSaveClick = async (e: React.SyntheticEvent) => {
    // e.preventDefault();
    try {
      const res = await fetch("/api/note", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("res ===>", res);
      router.push("/");
      setTitle("");
      setContent("");
    } catch (error) {
      console.log("handleSaveClick error ===>", error);
      throw new Error(error);
    }
  };

  //todo: add word count not short than 20 characters and not longer than 300 characters

  return (
    <form onSubmit={handleSaveClick}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />

      <label htmlFor="content">Content:</label>
      <textarea id="content" value={content} onChange={handleContentChange} />

      <button type="submit" disabled={!content || !title}>
        Save
      </button>
    </form>
  );
};

export default CreateNote;
