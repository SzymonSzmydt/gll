import dash from "./styles.module.css";
import { DataBase } from "./dataBase/DataBase";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Generate } from "./controlPanel/generate/Generate";
import { Window } from "../../components/windows/Window";
import { Note } from "./Note.tsx/Note";
export function Dashboard() {
  return (
    <main className={dash.main}>
      <section>
        <DataBase />
        <Note />
      </section>
      <section>
        <ControlPanel />
        <Window shadow={true}>
          <Generate />
        </Window>
      </section>
    </main>
  );
}
