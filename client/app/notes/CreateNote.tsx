"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CreateNoteProps {
  onSave: (title: string, content: string) => void;
}

const CreateNote: React.FC<CreateNoteProps> = ({ onSave }) => {
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

  const handleSaveClick = () => {
    //todo: fetch POST /api/notes
    onSave(title, content);
    setTitle("");
    setContent("");
    router.refresh();
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

      <button type="submit">Save</button>
    </form>
  );
};

export default CreateNote;
