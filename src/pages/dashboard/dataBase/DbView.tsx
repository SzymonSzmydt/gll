import db from "./db.module.css";

export function DbView() {
  return (
    <table className={db.table}>
      <thead>
        <tr className={db.tr}>
          <td> Data </td>
          <td> Wynik losowania </td>
          <td> </td>
        </tr>
      </thead>
      <tbody>
            
      </tbody>
    </table>
  );
}
