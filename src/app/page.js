'use client'

import styles from "./page.module.css";
import { Hello } from "./hello/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hello/>
    </main>
  );
}
