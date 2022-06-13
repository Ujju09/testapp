/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const jsonData = require("../data/data.json");


  return (
    <div className={styles.container}>
      <Head>
        <title>Med-Aana</title>
        <meta
          name="Seamless hospital appointments using QR code."
          content="Get appointments in an instant. Forget the queues."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Devkamal Hospital</Link>
        </h1>

        <div className={styles.grid}>
          {jsonData.map((item, index) => {
            return (
              <Link key={index} href={`/${encodeURIComponent(item.name)}`}>
                <div className={styles.card}>
                  <h2>{item.name} &rarr;</h2>
                  <p>{item.specialization}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/MedAana.svg"
              alt="MedAana Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
