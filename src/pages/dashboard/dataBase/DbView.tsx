import dbStyles from "./db.module.css";
import type { RootState } from "../../../context/redux/Store";
import { useSelector } from "react-redux";
import { DbTableRow } from "./DbTableRow";
import { Db } from "../../../context/redux/dbSlice";

export function DbView() {
  const db: Array<Db> = useSelector((state: RootState) => state.database.value);
  const data: any[] = Object.values(db);
  const dbDate: any[] = Object.keys(db);

  return (
    <table className={dbStyles.table}>
      <thead>
        <tr className={dbStyles.tr}>
          <td> Data </td>
          <td> Wynik losowania </td>
          <td> </td>
        </tr>
      </thead>
      <tbody>
        {data.length > 0
          ? data.map((e, i) => (
              <DbTableRow
                key={i}
                date={dbDate[i]}
                name1={e["normal1"]}
                name2={e["normal2"]}
              />
            ))
          : null}
      </tbody>
    </table>
  );
}
