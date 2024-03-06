
import navStyles from './navigation.module.css'
import Link from 'next/link'

export function Navigation() {
    return (
        <nav className={navStyles.Nav}>
        <ul>
          <li>
            <Link href="/">hello.html</Link>
          </li>
          <li>
            <Link href="/sidebar">about.css</Link>
          </li>
          <li>
            <Link href="/">project.js</Link>
          </li>
        </ul>
      </nav>
    );
  }
  