import table from "./tables.module.css";
import { howManyOccursVoid } from "../../../context/hooks/functions";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";

type Props = {
  data: howManyOccursVoid[];
  lengths: number;
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>;
  setDetailedData: Dispatch<SetStateAction<howManyOccursVoid>>;
};

export function NumberOccurs({
  data,
  lengths,
  setIsPopupVisible,
  setDetailedData,
}: Props) {
  const lightBase = useSelector((state: RootState) => state.light.value);
  const handleClick = (item: howManyOccursVoid) => {
    setIsPopupVisible(true);
    setDetailedData(item);
  };
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
              <tr
                key={i}
                className={lightBase.includes(e.num) ? table.accent : table.tr}
                onClick={() => handleClick(e)}
              >
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
  );
}
