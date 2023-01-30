import { WindowWithCloseBtn } from "../../windows/WindowWithCloseBtn";
import { BlackArea } from "../BlackArea";
import { Ball } from "../../buttons/Ball";
import { Dispatch, SetStateAction } from "react";
import { checkIfNumbersAreInDb } from "../../../context/hooks/SearchDatabase";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";

type SearchProsp = {
  numbersToFind: string;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export function SearchResults({ numbersToFind, setIsVisible }: SearchProsp) {
  const db = useSelector((state: RootState) => state.database.value);

  const arrayNumbersToFind: number[] = numbersToFind.includes(",")
    ? Array.from(new Set(numbersToFind.split(",").map((e) => +e)))
    : numbersToFind.includes(".")
    ? Array.from(new Set(numbersToFind.split(".").map((e) => +e)))
    : Array.from(new Set(numbersToFind.split(" ").map((e) => +e)));

  const resultOfSearch = checkIfNumbersAreInDb(arrayNumbersToFind, db);
  return (
    <WindowWithCloseBtn handleClose={() => setIsVisible(false)}>
      {resultOfSearch.length > 0 ? (
        <>
          Lista wyników
          <hr />
          <BlackArea name={"Szukane Liczby"}>
            {arrayNumbersToFind.map((e) => (
              <Ball key={e}> {e} </Ball>
            ))}
          </BlackArea>
          <section>
            Wystąpienia
            <hr />
            {resultOfSearch.map((e) => (
              <BlackArea name={e.date}>
                {e.nums.map((num) => (
                  <Ball key={num}> {num} </Ball>
                ))}
              </BlackArea>
            ))}
          </section>
        </>
      ) : db.length > 0 ? (
        <p>Nie znaleziono nic podobnego do podanej frazy!</p>
      ) : (
        <p> Zaktualizuj bazę z liczbami ! </p>
      )}
    </WindowWithCloseBtn>
  );
}
