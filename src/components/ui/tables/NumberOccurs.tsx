import table from "./tables.module.css";
import { howManyOccursVoid } from "../../../context/hooks/functions";

type Props = {
  data: howManyOccursVoid[];
  lengths: number;
};

export function NumberOccurs({ data, lengths }: Props) {
  return (
    <table className={table.table}>
      <thead>
        <tr>
          <td className={table.tdHead}> Liczba </td>
          <td className={table.tdHead}> Wystąpienia </td>
          <td className={table.tdHead}> Oscylacja </td>
        </tr>
      </thead>
      <tbody>
        {data.length > 0
          ? data.map((e, i) => (
              <tr key={i} className={table.tr}>
                <td className={table.tdcolor}> {e.num} </td>
                <td className={table.td}> {e["date"].length} </td>
                <td className={table.td}>
                  {`${((e["date"].length / lengths) * 100).toFixed()} %`}
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}
