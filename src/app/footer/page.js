import styles from './footer.module.css';
import { FaLinkedin, FaTwitterSquare, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <ul className={styles.socialLinks}>
          <li>Connect with me:</li>
          <li><a href="#"><FaLinkedin /></a></li>
          <li><a href="#"><FaTwitterSquare /></a></li>
          <li><a href="#"><FaGithub /></a></li>
        </ul>
      </div>
    </footer>
  );
}