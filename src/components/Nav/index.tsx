"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  MdAutoStories,
  MdAutoAwesomeMotion,
  MdInbox,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { HiBeaker, HiHome } from "react-icons/hi";
import styles from "./styles.module.css";

const Nav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <nav className={activeMenu ? styles["side-nav-active"] : styles["side-nav"]}>
        <ul className={styles["nav-list"]}>
          <Link href="/">
            <li
              className={
                pathname === "/"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
            >
              <HiHome className={styles["nav-icon"]} />
              <span>Inicio</span>
            </li>
          </Link>
          <Link href="/invites">
            <li
              className={
                pathname === "/invites"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
            >
              <MdInbox className={styles["nav-icon"]} />
              <span>Invitaciones</span>
            </li>
          </Link>
          <Link href="/project">
            <li
              className={
                pathname === "/project"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
            >
              <MdAutoStories className={styles["nav-icon"]} />
              <span>Mi Proyecto</span>
            </li>
          </Link>
          <Link href="/history">
            <li
              className={
                pathname === "/history"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
            >
              <MdAutoAwesomeMotion className={styles["nav-icon"]} />
              <span>Historial</span>
            </li>
          </Link>
          <Link href="/about">
            <li
              className={
                pathname === "/about"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
            >
              <HiBeaker className={styles["nav-icon"]} />
              <span>¿Qué es HACKY?</span>
            </li>
          </Link>
        </ul>
      </nav>
      <button onClick={handleMenu} className={styles.menuButton} type="button">
        {activeMenu ? <MdClose /> : <MdMenu />}
      </button>
    </>
  );
};

export default Nav;
