import styles from "./windows.module.css";

type WindowProps = {
  children: React.ReactNode;
  handleClose?: () => void;
};
export function WindowWithCloseBtn({ children, handleClose }: WindowProps) {
  return (
    <div className={styles.windowWithClose}>
      <div onClick={handleClose} className={styles.close}>
        <span className={styles.closeText}> off </span>
      </div>
      {children}
    </div>
  );
}
