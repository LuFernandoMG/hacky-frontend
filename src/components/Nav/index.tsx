// components/Nav.tsx
// components/Nav/index.tsx
"use client";
import Link from 'next/link';
import { FaHome, FaRoute, FaChartLine, FaComments, FaBell, FaRegChartBar, FaBookReader } from 'react-icons/fa';
import styles from './styles.module.css';

const Nav: React.FC = () => {
    return (
        <nav className={styles["side-nav"]}>
            <ul className={styles["nav-list"]}>
                <li className={styles["nav-item"]}>
                    <Link href="/">
                        <FaHome className={styles["nav-icon"]} />
                        <span>Inicio</span>
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link href="/notifications">
                        <FaBell className={styles["nav-icon"]} />
                        <span>Invitaciones</span>
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link href="/proyect">
                        <FaRegChartBar className={styles["nav-icon"]} />
                        <span>Mi Proyecto</span>
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link href="/historic">
                        <FaRoute className={styles["nav-icon"]} />
                        <span>Historial</span>
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link href="/about">
                        <FaBookReader className={styles["nav-icon"]} />
                        <span>¿Qué es HACKY?</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
