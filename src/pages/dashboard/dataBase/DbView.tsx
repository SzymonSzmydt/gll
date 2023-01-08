import dbStyles from "./db.module.css";
import type { RootState } from "../../../context/redux/Store";
import { useSelector } from "react-redux";
import { DbTableRow } from "./DbTableRow";

export function DbView() {
  const db: any[] = Object.values(
    useSelector((state: RootState) => state.database.value)
  );

  return (
    <>
      <table className={dbStyles.table}>
        <thead>
          <tr className={dbStyles.tr}>
            <td> Data </td>
            <td> Wynik losowania </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>
              <div className={dbStyles.div}>
                {db.length > 0
                  ? db.map((e) => <DbTableRow key={e.date} {...e} />)
                  : null}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <span className={dbStyles.tdDate}>Ilość recordów: </span>
      <span> {db.length} </span>
    </>
  );
}
