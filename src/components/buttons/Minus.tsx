import btn from "./buttons.module.css";

type MinusProps = {
  handleClick: () => void;
};
export function Minus({ handleClick }: MinusProps) {
  return <div className={btn.minus} />;
}
