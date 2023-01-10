import styles from "./windows.module.css";

type WindowProps = {
  children: React.ReactNode;
  shadow?: boolean;
};
export function Window({ children, shadow }: WindowProps) {
  const isShadow = shadow ? styles.shadow : "";
  return <div className={`${styles.window} ${isShadow}`}>{children}</div>;
}
