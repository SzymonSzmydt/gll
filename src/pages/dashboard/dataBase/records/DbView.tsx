import dbStyles from "./record.module.css";
import type { RootState } from "../../../../context/redux/Store";
import { useSelector } from "react-redux";
import { DbTableRow } from "./DbTableRow";

type DbViewProps = {
  isSorted: boolean;
};

export function DbView({ isSorted }: DbViewProps) {
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
                  ? db
                      .sort(
                        (a, b) =>
                          b.date
                            .split("")
                            .filter((e: string) => e !== "-")
                            .join("") -
                          a.date
                            .split("")
                            .filter((e: string) => e !== "-")
                            .join("")
                      )
                      .map((e) => (
                        <DbTableRow key={e.date} isSorted={isSorted} {...e} />
                      ))
                  : null}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <span className={dbStyles.info}>Ilość recordów: {db.length ?? null}</span>
    </>
  );
}
