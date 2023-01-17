import nav from "./nav.module.css";
import { BtnVariant } from "../../../../components/buttons/BtnVariant";
import { Dispatch, SetStateAction, useState } from "react";

type NavProps = {
  setNav: Dispatch<SetStateAction<string>>;
};
type StateProps = {
  stat?: boolean;
  gen?: boolean;
};
export function Nav({ setNav }: NavProps) {
  const [isActive, setIsActive] = useState<StateProps>({
    stat: true,
    gen: false,
  });

  const handleClick = (props: StateProps, name: string) => {
    setNav(name);
    setIsActive({ ...isActive, ...props });
  };
  return (
    <nav className={nav.nav}>
      <BtnVariant
        name={"STATYSTYKA"}
        handleClick={() =>
          handleClick({ stat: true, gen: false }, "statistics")
        }
        isActive={isActive.stat}
      />
      <BtnVariant
        name={"GENEROWANIE"}
        handleClick={() => handleClick({ stat: false, gen: true }, "generate")}
        isActive={isActive.gen}
      />
      <BtnVariant name={"EMPTY"} />
      <BtnVariant name={"EMPTY"} />
      <BtnVariant name={"EMPTY"} />
    </nav>
  );
}
