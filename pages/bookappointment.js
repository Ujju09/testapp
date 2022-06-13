/** @format */
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function BookAppointment() {
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
        <h1 className={styles.title}>Book appointment with Dr. Sanjay Kumar</h1>
        <div className={styles.grid}>
          <button className={styles.button}>
            <a href="https://wa.me/918888888888">Book Appointment</a>
          </button>
        </div>
      </main>
    </div>
  );
}
