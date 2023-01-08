import dash from "./styles.module.css";
import { DataBase } from "./dataBase/DataBase";
import { ControlPanel } from "./controlPanel/ControlPanel";
export function Dashboard() {
  return (
    <main className={dash.main}>
      <DataBase />
      <ControlPanel />
    </main>
  );
}
