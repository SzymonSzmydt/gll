import dash from "./styles.module.css";
import { DataBase } from "./dataBase/DataBase";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Generate } from "./controlPanel/generate/Generate";
import { Window } from "../../components/windows/Window";
import { Note } from "./Note.tsx/Note";
import { FindNumbers } from "./controlPanel/generate/FindNumbers";
import { useSelector } from "react-redux";
import { RootState } from "../../context/redux/Store";
export function Dashboard() {
  const data50 = useSelector((state: RootState) => state.database.data50);
  return (
    <main className={dash.main}>
      <section>
        <DataBase />
        <Note />
        <FindNumbers data50={data50} />
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
