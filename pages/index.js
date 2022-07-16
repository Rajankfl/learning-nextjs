import Link from "next/link";
import styles from "../styles/Home.module.css";
function HomePage() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blogpost/hello">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomePage;
