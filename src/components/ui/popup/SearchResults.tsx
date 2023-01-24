import popup from "./popup.module.css";
import { WindowWithCloseBtn } from "../../windows/WindowWithCloseBtn";

export function SearchResults() {
  return (
    <WindowWithCloseBtn>
      <span>Szukane liczby: </span>
    </WindowWithCloseBtn>
  );
}
