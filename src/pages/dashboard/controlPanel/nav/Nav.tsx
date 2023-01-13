import nav from "./nav.module.css";
import { BtnVariant } from "../../../../components/buttons/BtnVariant";
import { Dispatch, SetStateAction } from "react";

type NavProps = {
  setNav: Dispatch<SetStateAction<string>>;
};
export function Nav({ setNav }: NavProps) {
  return (
    <nav className={nav.nav}>
      <BtnVariant
        name={"STATYSTYKA"}
        handleClick={() => setNav("statistics")}
      />
      <BtnVariant name={"GENEROWANIE"} handleClick={() => setNav("generate")} />
      <BtnVariant name={"EMPTY"} />
      <BtnVariant name={"EMPTY"} />
      <BtnVariant name={"EMPTY"} />
    </nav>
  );
}
