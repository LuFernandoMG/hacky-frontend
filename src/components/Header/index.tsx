// components/Header.tsx
"use client";
import styles from "./styles.module.css";
//import Nav from '../Nav';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles["header-container"]}>
                <div className={styles.logo}>
                    {/* Agrega el logo aquí */}
                    <Image src="/hacky.svg" alt="Logo de Hacky" width={60} height={60} />
                </div>
             //Poner el nav ;
            </div>
        </header>
    );
};

export default Header;

