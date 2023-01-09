import ctr from "./control.module.css";
import { WindowShadow } from "../../../components/windows/WindowShadow";
import { Nav } from "./nav/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import {
  arrayGenerator,
  howManyOccured,
} from "../../../context/hooks/functions";

export function ControlPanel() {
  const db = Object.values(
    useSelector((state: RootState) => state.database.value)
  );

  const data = db
    ? arrayGenerator(50).map((e: number) => howManyOccured(e, db))
    : [];
  console.log(data);

  return (
    <WindowShadow>
      <Nav />
      <table>
        <thead>
          <tr>
            <td className={ctr.td}> Liczba </td>
            <td className={ctr.td}> Wystąpienia </td>
            <td className={ctr.td}> Oscylacja </td>
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map((e, i) => (
                <tr key={i} className={ctr.tr}>
                  <td className={ctr.td}> {e[0]?.num} </td>
                  <td className={ctr.td}> {e.length} </td>
                  <td className={ctr.td}>
                    {`${((e.length / db.length) * 100).toFixed()} %`}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </WindowShadow>
  );
}
