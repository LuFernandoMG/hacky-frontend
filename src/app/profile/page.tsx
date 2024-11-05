'use client'
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function Profile() {
  const router = useRouter();

  const token = localStorage.getItem("token");
  if(!token || token === "null" || token === "undefined") {
    router.push("/login");

    return null;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hola profile</h1>
      </main>
    </div>
  );
}
