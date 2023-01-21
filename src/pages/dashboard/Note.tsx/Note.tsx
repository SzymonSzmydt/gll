import note from "./note.module.css";
import { Window } from "../../../components/windows/Window";
import { useState, useEffect } from "react";
import { Delete } from "../../../components/buttons/Delete";

type TextArea = {
  line: string;
  multiline: string;
};

const localNoteFile = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes") || "")
  : { line: "", multiline: "" };

export function Note() {
  const [notes, setNotes] = useState<TextArea>(localNoteFile);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Window shadow={true}>
      <form className={note.form}>
        <label htmlFor="notes"> Notes </label>
        <textarea
          name="notes"
          value={notes.line}
          onChange={(e) => setNotes({ ...notes, line: e.target.value })}
          className={note.textarea1}
        />
        <textarea
          name="notes"
          className={note.textarea2}
          value={notes.multiline}
          onChange={(e) => setNotes({ ...notes, multiline: e.target.value })}
        />
      </form>
      <section className={note.box}>
        <Delete handleClick={() => setNotes({ line: "", multiline: "" })} />
      </section>
    </Window>
  );
}
