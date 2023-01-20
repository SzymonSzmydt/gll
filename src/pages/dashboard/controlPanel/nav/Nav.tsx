import nav from "./nav.module.css";
import { BtnVariant } from "../../../../components/buttons/BtnVariant";
import { Dispatch, SetStateAction, useState } from "react";

type NavProps = {
  setNav: Dispatch<SetStateAction<string>>;
};
type StateProps = {
  stat: boolean;
  gen: boolean;
  pair: boolean;
};
export function Nav({ setNav }: NavProps) {
  const [isActive, setIsActive] = useState<StateProps>({
    stat: true,
    gen: false,
    pair: false,
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
          handleClick({ stat: true, gen: false, pair: false }, "statistics")
        }
        isActive={isActive.stat}
      />
      <BtnVariant
        name={"GENEROWANIE"}
        handleClick={() =>
          handleClick({ stat: false, gen: true, pair: false }, "generate")
        }
        isActive={isActive.gen}
      />
      <BtnVariant
        name={"PAIRS"}
        handleClick={() =>
          handleClick({ stat: false, gen: false, pair: true }, "pairs")
        }
        isActive={isActive.pair}
      />
      <BtnVariant name={"EMPTY"} />
      <BtnVariant name={"EMPTY"} />
    </nav>
  );
}
