import { WindowWithCloseBtn } from "../../windows/WindowWithCloseBtn";

type Data = {
  num: number;
  date: string[];
};
type DetailedProps = {
  data: Data;
  handleClose: () => void;
};
export function DetailedInstances({ handleClose, data }: DetailedProps) {
  console.log(data);

  return (
    <WindowWithCloseBtn handleClose={handleClose}>
      <p>
        Liczba {data.num} wystąpiła {data.date.length} razy.
      </p>
      <table>
        <thead>
          <tr>
            <td></td>
          </tr>
        </thead>
      </table>
    </WindowWithCloseBtn>
  );
}
