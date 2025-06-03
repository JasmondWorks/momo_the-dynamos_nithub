import styles from "./spinner.module.css";

function Spinner({ className }) {
  return <span className={`${className} ${styles.loader}`}></span>;
}

export default Spinner;
