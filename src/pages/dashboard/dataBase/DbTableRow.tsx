import dbStyles from "./db.module.css";

type DbTableRowProps = {
  date: string;
  name1: Array<number>;
  name2: Array<number>;
};

export function DbTableRow({ date, name1, name2 }: DbTableRowProps) {
  return (
    <tr className={dbStyles.nth}>
      <td className={dbStyles.tdDate}> {date} </td>
      <td>
        {name1.map((e) => (
          <div key={e} className={dbStyles.tdSpan}>
            {e}
          </div>
        ))}
      </td>
      <td>
        {name2.map((e) => (
          <div key={e} className={dbStyles.tdSpan}>
            {e}
          </div>
        ))}
      </td>
    </tr>
  );
}
