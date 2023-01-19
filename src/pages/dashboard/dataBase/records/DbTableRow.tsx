import dbStyles from "./record.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../context/redux/Store";
import {
  updateLight1,
  updateLight2,
  updateLightDate,
} from "../../../../context/redux/numbersLight";

type DbTableRowProps = {
  date: string;
  normal1: Array<number>;
  normal2: Array<number>;
  sort1: Array<number>;
  sort2: Array<number>;
  isSorted: boolean;
};

export function DbTableRow({
  date,
  isSorted,
  normal1,
  normal2,
  sort1,
  sort2,
}: DbTableRowProps) {
  const lightCatched50 = useSelector((state: RootState) => state.light.normal1);
  const isLight = "" + lightCatched50 === "" + normal1;
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!isLight) {
      dispatch(updateLight1(normal1));
      dispatch(updateLight2(normal2));
      dispatch(updateLightDate(date));
    }
    if (isLight) {
      dispatch(updateLight1([]));
      dispatch(updateLight2([]));
    }
  };

  const data50: number[] = isSorted ? sort1 : normal1;
  const data12: number[] = isSorted ? sort2 : normal2;

  return (
    <table>
      <tfoot>
        <tr
          className={isLight ? dbStyles.accent : dbStyles.nth}
          onClick={handleClick}
        >
          <td className={dbStyles.tdDate}> {date ?? null}</td>
          <td>
            {normal1
              ? data50.map((e) => (
                  <div key={e} className={dbStyles.tdSpan}>
                    {e}
                  </div>
                ))
              : null}
          </td>
          <td>
            {normal2
              ? data12.map((e) => (
                  <div
                    key={e}
                    className={`${dbStyles.tdSpan} + ${dbStyles.fontDark}`}
                  >
                    {e}
                  </div>
                ))
              : null}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
