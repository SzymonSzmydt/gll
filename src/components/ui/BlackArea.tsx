import ui from "./ui.module.css";

type BlackProps = {
  children: React.ReactNode;
  name?: string;
};

export function BlackArea({ children, name }: BlackProps) {
  return (
    <>
      <span className={ui.small}> {name} </span>
      <div className={ui.black}>{children}</div>
    </>
  );
}
