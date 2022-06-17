/** @format */

import { jsPDF, setFontSize, setTextColor, line } from "jspdf";
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

  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const docSnap = FetchConfirmedAppointmentData(hospitalID, id);
    docSnap.then((snapshot) => {
      setName(snapshot.data().patient);
      setDoctor(snapshot.data().doctor);
      setDate(snapshot.data().date);
    });
  }, []);
  const docs = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true,
  });
  docs.setFontSize(24);
  docs.text("Devkamal Hospital", 10, 10);
  docs.setFontSize(12);
  docs.line(10, 15, 200, 15);
  docs.line(10, 270, 200, 270);

  docs.setTextColor("#3d423d");
  docs.text(`${name}`, 10, 20);
  docs.text(`Appointment with ${doctor}`, 10, 30);
  docs.text(`Date: ${date}`, 10, 40);
  docs.text(`Your appointment ID: ${id}`, 10, 50);

  const downloadPDF = () => {
    docs.save(`${id}.pdf`);
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
