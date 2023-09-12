import styles from "./styles.module.css";
import Welcome from "./welcome";

function App() {
  return (
    <div className={styles.container}>
      <Welcome />
      <h1 className={styles.title}>Main page</h1>
      <p className={styles.content}>This is the main section</p>
    </div>
  );
}

export default App;
