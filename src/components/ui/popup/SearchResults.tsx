import popup from "./popup.module.css";
import { WindowWithCloseBtn } from "../../windows/WindowWithCloseBtn";
import { BlackArea } from "../BlackArea";
import { Ball } from "../../buttons/Ball";
import { Dispatch, SetStateAction } from "react";

type SearchProsp = {
  numbersToFind: string;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export function SearchResults({ numbersToFind, setIsVisible }: SearchProsp) {
  const arrayNumbersToFind: number[] = numbersToFind.split(",").map((e) => +e);
  return (
    <WindowWithCloseBtn handleClose={() => setIsVisible(false)}>
      Lista wyników
      <br />
      <BlackArea name={"Szukane Liczby"}>
        {arrayNumbersToFind.map((e) => (
          <Ball key={e}> {e} </Ball>
        ))}
      </BlackArea>
    </WindowWithCloseBtn>
  );
}
