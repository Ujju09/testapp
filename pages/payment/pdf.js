/** @format */

import { jsPDF } from "jspdf";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import exportItems from "../../components/config";

// Default export is a4 paper, portrait, using millimeters for units

export default function PDF() {
  const router = useRouter();
  const { id } = router.query;
  let hospitalID = "AJ0nXPw72TKOIq7kEQzR";

  const { FetchConfirmedAppointmentData } = exportItems;

  useEffect(() => {
    const docSnap = FetchConfirmedAppointmentData(hospitalID, id);
    console.log(docSnap);
    docSnap.then((snapshot) => {
      console.log(snapshot.data());
    });
  }, []);

  const docs = new jsPDF();
  docs.text("Devkamal Hospital", 10, 10);

  const downloadPDF = () => {
    docs.save("test.pdf");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Aapka appointment receit.</h2>
        <div className={styles.grid}>
          <button className={styles.button} onClick={downloadPDF}>
            Download
          </button>
        </div>
      </main>
    </div>
  );
}
