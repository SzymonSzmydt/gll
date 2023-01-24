import ui from "./ui.module.css";

type BlackProps = {
  children: React.ReactNode;
  name?: string;
};

export function BlackArea({ children, name }: BlackProps) {
  return (
    <>
      <div className={ui.small}> {name} </div>
      <div className={ui.black}>{children}</div>
    </>
  );
}
