import btn from "./buttons.module.css";
type SearchProps = {
  handleClick: () => void;
};
export function Search({ handleClick }: SearchProps) {
  return <div className={btn.search} onClick={handleClick} />;
}
