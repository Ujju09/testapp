/** @format */

import styles from "../../styles/Home.module.css";
import HeadComponent from "../../components/headComponent";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import exportItems from "../../components/config";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import Link from "next/link";
export default function QRPaymentConfirmationPage() {
  const router = useRouter();
  const { id } = router.query;
  let hospitalID = "AJ0nXPw72TKOIq7kEQzR";

  const [paymentStatus, setPaymentStatus] = useState("");

  const { db } = exportItems;

  const GetAppointmentData = (hospitalID, id) => {
    try {
      onSnapshot(
        doc(db, "hospitals", hospitalID, "appointments", id),
        (doc) => {
          setPaymentStatus(doc.data().isPaid);
          // console.log(paymentStatus);
        }
      );
      console.log(paymentStatus);
      return paymentStatus;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    GetAppointmentData(hospitalID, id);
  });

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
        {paymentStatus === false ? <ApproveText /> : <ConfirmationAndInvoice />}
        <div className={styles.grid}>
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

const ApproveText = () => {
  return (
    <div className={styles.card}>
      <label>
        <h4
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          Your appointment is not confirmed yet.
        </h4>
      </label>
    </div>
  );
};

const ConfirmationAndInvoice = () => {
  return (
    <div className={styles.card}>
      <label>
        <h4>Your appointment is confirmed.</h4>
        <p>आपका अपॉइंटमेंट बुक हो गया है ।</p>
      </label>

      <button
        style={{
          display: "flex",
          margin: "auto",
          background: "green",
          color: "white",
          padding: "1rem",
          borderRadius: "12px",
          color: "white",
          border: "none",
          fontSize: "1rem",
        }}
      >
        <Link href="/invoice">Download करे</Link>
      </button>
    </div>
  );
};
