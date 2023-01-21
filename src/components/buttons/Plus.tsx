import btn from "./buttons.module.css";

type PlayProps = {
  handleClick: () => void;
};

export function Plus({ handleClick }: PlayProps) {
  return <div className={btn.plus} onClick={handleClick} />;
}
