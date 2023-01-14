import dash from "./styles.module.css";
import { DataBase } from "./dataBase/DataBase";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Generate } from "./controlPanel/Generate";
import { Window } from "../../components/windows/Window";
export function Dashboard() {
  return (
    <main className={dash.main}>
      <section>
        <DataBase />
        <Window shadow={true}>
          <Generate />
        </Window>
      </section>
      <section>
        <ControlPanel />
      </section>
    </main>
  );
}
