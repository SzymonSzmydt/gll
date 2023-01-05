import dbStyles from "./db.module.css";

type DbTableRowProps = {
  date: string;
  name1: Array<number>;
  name2: Array<number>;
};

export function DbTableRow({ date, name1, name2 }: DbTableRowProps) {
  return (
    <tr>
      <td> {date} </td>
      <td>
        {name1.map((e) => (
          <span className={dbStyles.tdSpan}> {e} </span>
        ))}
      </td>
      <td>
        {name2.map((e) => (
          <span className={dbStyles.tdSpan}> {e} </span>
        ))}
      </td>
    </tr>
  );
}
