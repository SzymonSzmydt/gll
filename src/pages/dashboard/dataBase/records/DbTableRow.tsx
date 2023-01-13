import dbStyles from "./record.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../context/redux/Store";
import {
  updateLight1,
  updateLight2,
} from "../../../../context/redux/numbersLight";

type DbTableRowProps = {
  date: string;
  normal1: Array<number>;
  normal2: Array<number>;
};

export function DbTableRow({ date, normal1, normal2 }: DbTableRowProps) {
  const catched50 = useSelector((state: RootState) => state.light.normal1);
  const isLight = "" + catched50 === "" + normal1;
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("isLight: ", isLight);
    if (!isLight) {
      dispatch(updateLight1(normal1));
      dispatch(updateLight2(normal2));
    }
    if (isLight) {
      dispatch(updateLight1([]));
      dispatch(updateLight2([]));
    }
  };

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
              ? normal1.map((e) => (
                  <div key={e} className={dbStyles.tdSpan}>
                    {e}
                  </div>
                ))
              : null}
          </td>
          <td>
            {normal2
              ? normal2.map((e) => (
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
