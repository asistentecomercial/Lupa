import Image from "next/image";
import styles from "./page.module.css";
import QualityChecklist from "@/components/QualityChecklist/QualityChecklist";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <QualityChecklist/>
      </main>
    </div>
  );
}
