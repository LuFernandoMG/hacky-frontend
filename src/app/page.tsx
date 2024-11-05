'use client'
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (!token || token === "null" || token === "undefined") {
    router.push("/login");

    return null;
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <section className={styles.dashboard}>
          <div className={styles.projects}>
            <h2>Current Projects</h2>
            <ul>
              <li>Project A</li>
              <li>Project B</li>
              <li>Project C</li>
            </ul>
          </div>
          <div className={styles.messages}>
            <h2>Pending Messages</h2>
            <ul>
              <li>Message 1</li>
              <li>Message 2</li>
              <li>Message 3</li>
            </ul>
          </div>
          <div className={styles.stats}>
            <h2>Performance Stats</h2>
            <p>Tasks Completed: 75%</p>
            <p>Efficiency: 80%</p>
            <p>Overall Performance: Good</p>
          </div>
          <div className={styles.scores}>
            <h2>My Scores</h2>
            <p>Score 1: 85</p>
            <p>Score 2: 90</p>
            <p>Score 3: 88</p>
          </div>
        </section>
      </main>
    </div>
  );
}
