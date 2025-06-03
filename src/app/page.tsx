import styles from "@/styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href={"/main"}>main</Link>
      <div>---------------</div>
      <div>---------------</div>
      <div>---------------</div>
      <Link href={"/auth"}>auth</Link>
    </div>
  );
}
