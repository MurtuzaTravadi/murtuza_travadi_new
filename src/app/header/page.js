import styles from './header.module.css';
import { VscChromeMinimize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.display}>display.js - Murtuza Travadi</div>
      <div className={styles.MinMaxClose}><VscChromeMinimize /></div>
      <div className={styles.MinMaxClose}><VscChromeRestore /></div>
      <div className={styles.MinMaxClose}><VscChromeClose /></div>
    </div>
  );
}
