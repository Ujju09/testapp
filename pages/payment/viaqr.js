/** @format */

import styles from "../../styles/Home.module.css";
import Link from "next/link";
import HeadComponent from "../../components/headComponent";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";

export default function QRPaymentConfirmationPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <HeadComponent />
      <main className={styles.main}>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          इसको काउंटर पे दिखा के पैसे जमा करे।
        </h2>
        <div className={styles.column}>
          <div style={{ background: "white", padding: "16px" }}>
            <QRCode value={id} />
          </div>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Your Appointment id is <strong>{id}</strong>
          </p>
          {/* {
            On payment status successful, redirect to success page and show the invoice and print button
          } */}
        </div>
      </main>
    </div>
  );
}
