import styles from "./tab.module.css";

export const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
