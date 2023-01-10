import table from "./tables.module.css";
import { howManyOccursVoid } from "../../../context/hooks/functions";
import { useState } from "react";
import { DetailedInstances } from "../popup/DetailedInstances";

type Props = {
  data: howManyOccursVoid[];
  lengths: number;
};

export function NumberOccurs({ data, lengths }: Props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [detailedData, setDetailedData] = useState<howManyOccursVoid>(
    {} as howManyOccursVoid
  );

  const handleClick = (item: howManyOccursVoid) => {
    setIsPopupVisible(true);
    setDetailedData(item);
  };

  return (
    <>
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
                <tr key={i} className={table.tr} onClick={() => handleClick(e)}>
                  <td className={table.td}> {e.num} </td>
                  <td className={table.td}> {e["date"].length} </td>
                  <td className={table.td}>
                    {`${((e["date"].length / lengths) * 100).toFixed()} %`}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {isPopupVisible && detailedData ? (
        <DetailedInstances
          handleClose={() => setIsPopupVisible(false)}
          data={detailedData}
        />
      ) : null}
    </>
  );
}
