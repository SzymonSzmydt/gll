import dbStyles from "./record.module.css";
import { useDispatch } from "react-redux";
import { updateLight } from "../../../../context/redux/numbersLight";

type DbTableRowProps = {
  date: string;
  normal1: Array<number>;
  normal2: Array<number>;
};

export function DbTableRow({ date, normal1, normal2 }: DbTableRowProps) {
  const dispatch = useDispatch();
  return (
    <table>
      <tfoot>
        <tr
          className={dbStyles.nth}
          onClick={() => dispatch(updateLight(normal1))}
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
