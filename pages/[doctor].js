/** @format */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Doctor() {
  const router = useRouter();
  const { doctor } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Devkamal Hospital</title>
        <meta
          name="Book apointments at devkamal hospital."
          content="Easy appointments at Devkamal hospital."
        />
      </Head>
      <main className={styles.main}>
        <h4>Book appointment with </h4>
        <h1 className={styles.title}>
          <em>{doctor}</em>
        </h1>
        <div className={styles.grid}>
          <button className={styles.button}>
            <a href="https://wa.me/919755992478">Book Appointment &rarr;</a>
          </button>
        </div>
      </main>
    </div>
  );
}
