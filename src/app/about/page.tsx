'use client'
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const token = localStorage.getItem("token");
  if(!token || token === "null" || token === "undefined") {
    router.push("/login");

    return null;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hola soy about</h1>
      </main>
    </div>
  );
}
