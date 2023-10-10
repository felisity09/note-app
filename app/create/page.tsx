"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Notes({ notes }: any) {
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
    e.preventDefault();
    try {
      if (!title) {
        return window.alert("Title are required.");
      }

      if (content.length < 20 || content.length > 300) {
        return alert(
          "Content must be at least 20 characters and no longer than 300 characters."
        );
      }

      const res = await fetch("/api/note", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTitle("");
      setContent("");
      router.push("/"); //todo:{ shallow: true }
      return res;
    } catch (error) {
      console.log("handleSaveClick error ===>", error);
      throw new Error(String(error));
    }
  };

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
}
