import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.center}>
        <div className={styles.ring}></div>
        <span className={styles.title}>BrotasGram</span>
    </div>
  )
}

export default LoadingScreen