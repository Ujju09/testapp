/** @format */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import exportItems from "../components/config";
import { useState } from "react";


export default function Doctor() {
  const router = useRouter();
  const { doctor } = router.query;
  const spec = router.query.specialization;
  const { CreateAppointments } = exportItems;
  let id = "AJ0nXPw72TKOIq7kEQzR";
  const date = new Date();
  const time =
    date.getHours() + ":" + date.getMinutes() + ": " + date.getSeconds();

  const initialData = Object.freeze({
    doctor: doctor,
    patient: "",
    date: date.toLocaleDateString(),
    mobile: "",
    age: "",
  });

  const [loading, setLoading] = useState(false);

  const [appointmentData, setAppointmentData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (appointmentData.patient === "" || appointmentData.mobile === "") {
      alert("Please fill all the fields");
    } else {
      setLoading(!loading);
      CreateAppointments(id, appointmentData).then((res) => {
        //Refresh bug in the qr page
        router.push({
          pathname: `/payment/viaqr`,
          query: { id: res },
        });
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({ ...appointmentData, [name]: value });
    console.log(appointmentData);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Devkamal Hospital</title>
        <meta
          name="Book apointments at Devkamal Hospital."
          content="Easy appointments at Devkamal hospital."
        />
      </Head>
      <main className={styles.main}>
        <h4>Book appointment with </h4>
        <h1 className={styles.title}>
          <em>{doctor}</em>
          <br />
          <small
            style={{
              color: "grey",
              fontSize: "1.8rem",
            }}
          >
            {spec}
          </small>
        </h1>
        <div className={styles.grid}>
          <input
            className={styles.input}
            type="text"
            placeholder="मरीज़ का नाम"
            name="patient"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="मोबाइल नंबर"
            name="mobile"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="मरीज़ की उम्र"
            name="age"
            onChange={handleChange}
          />
        </div>
        <button
          className={styles.button}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : `Book Appointment`}
        </button>
       
      </main>
      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Digital Appointments at Devkamal Hospital{"-"}
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
