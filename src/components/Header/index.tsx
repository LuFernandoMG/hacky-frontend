// components/Header.tsx
"use client";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import Image from 'next/image';

const Header: React.FC = () => {
    const pathname = usePathname();

    if (pathname === "/login" || pathname === "/signup") {
        return null;
    }
    return (
        <header className={styles.header}>
            <div className={styles["header-container"]}>
                <div className={styles.logo}>
                    {/* Agrega el logo aquí */}
                    <Image src="/hacky.svg" alt="Logo de Hacky" width={120} height={60} />
                </div>
            </div>
        </header>
    );
};

export default Header;

