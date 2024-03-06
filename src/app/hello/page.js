
import styles from "./hello.module.css";
import { Animation } from "../animation/page";

export function Hello() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.main}>
            <div className={styles.lineNumbers}>
              {[...Array(20).keys()].map((lineNumber) => (
                <span key={lineNumber + 1}>{lineNumber + 1}</span>
              ))}
            </div>
            <div className={styles.content}>
              <h3>Hello! I am</h3>
              <div />
              <h1>Murtuza Travadi</h1>
              <div />
              <h3>I am a full stack developer.</h3>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {/* Animation component goes here */}
          <Animation />
        </div>
      </div>
    </div>
  );
}