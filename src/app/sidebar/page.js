// Sidebar.js
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>Biography</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Experience</li>
      </ul>
    </div>
  );
}
