import table from "./tables.module.css";
import { howManyOccursVoid } from "../../../context/hooks/functions";

type Props = {
  data: howManyOccursVoid[];
};

export function NumberOccurs({ data }: Props) {
  return (
    <table className={table.table}>
      <thead>
        <tr>
          <td className={table.td}> Liczba </td>
          <td className={table.td}> Wystąpienia </td>
          <td className={table.td}> Oscylacja </td>
        </tr>
      </thead>
      <tbody>
        {data.length > 0
          ? data.map((e, i) => (
              <tr key={i} className={table.tr}>
                <td className={table.tdcolor}> {e.num} </td>
                <td className={table.td}> {e["date"].length} </td>
                <td className={table.td}>
                  {`${((e["date"].length / data.length) * 100).toFixed()} %`}
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}
