"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import dashboardDesktop from "/public/dashboard-desktop.png";

export default function Home() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (!token || token === "null" || token === "undefined") {
      router.push("/login");

      return null;
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={dashboardDesktop}
          className={styles.dashboardImage}
          alt="Dashboard"
          width={1912}
          height={1312}
        />
      </main>
    </div>
  );
}
