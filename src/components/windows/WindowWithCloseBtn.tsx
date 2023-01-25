import styles from "./windows.module.css";
import { useRef, useEffect } from "react";

type WindowProps = {
  children: React.ReactNode;
  handleClose?: () => void;
};
export function WindowWithCloseBtn({ children, handleClose }: WindowProps) {
  const scrollRef = useRef<HTMLHRElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  return (
    <div className={styles.windowWithClose} ref={scrollRef}>
      <div onClick={handleClose} className={styles.close}>
        <span className={styles.closeText}> off </span>
      </div>
      {children}
    </div>
  );
}
