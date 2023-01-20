import note from "./note.module.css";
import { Window } from "../../../components/windows/Window";

export function Note() {
  return (
    <Window shadow={true}>
      <form className={note.form}>
        <label htmlFor="notes"> Notes </label>
        <textarea name="notes" className={note.textarea1} />
        <textarea name="notes" className={note.textarea2} />
      </form>
    </Window>
  );
}
