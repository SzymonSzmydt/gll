import nav from "./nav.module.css";
import { BtnVariant } from "../../../../components/buttons/BtnVariant";

export function Nav() {
  return (
    <nav className={nav.nav}>
      <BtnVariant name={"STATYSTYKA"} />
      <BtnVariant name={"GENEROWANIE"} />
      <BtnVariant name={"EMPTY"} />
      <BtnVariant name={"EMPTY"} />
      <BtnVariant name={"EMPTY"} />
    </nav>
  );
}
