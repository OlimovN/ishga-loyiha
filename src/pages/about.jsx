import React from "react";
import ozm from "../assets/ozm.jpg"

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>O'zim Haqimda</h2>
      <h1>Olimov Nurmuhammad Yoqubjon o'g'li</h1>
      <p style={styles.description}>
        Farg'oba viloyati Yozyavon tumani Eshonto'pi qishlog'ida tavvallud
        topganman .<b>Yoshim:16 da . Hozirda 10-sinfda tahsil olaman</b>
      </p>
      <p style={styles.description}>
        Men IT kurslarini Njaot Talim oquv kurslarini tamomlaganman . Dasturlash
        va veb-ishlanma sohasida tajribaga ega bo'lib, yangi texnologiyalar va
        dizayn yo'nalishida o'zimni rivojlantirishni maqsad qilganman.
      </p>

      <h3 style={styles.sectionTitle}>Qiziqishlarim:</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          O'yinlar
          <p style={styles.subText}>Pubg, Call of Duty, PES</p>
        </li>
        <li style={styles.listItem}>
          Sport <p style={styles.subText}>Futbol, Volleyball</p>
        </li>
      </ul>

      <h3 style={styles.sectionTitle}>Malakalarim:</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          JavaScript, React, Node.js Type Script va Next.js
          <p style={styles.subText}>
            Asosan React va JavaScript dan foydalanaman . Node.js , Next.js va
            TypeScript dan ham habarim bor
          </p>
        </li>
        <li style={styles.listItem}>
          HTML, CSS, Tailwind CSS
          <p style={styles.subText}> HTML CSS va Talwind CSS dan tolaqonli foydalana olaman </p>
        </li>
        <li style={styles.listItem}>
          API integratsiyasi va ma'lumotlar bilan ishlash
        </li>
        <li style={styles.listItem}>Responsive dizayn va optimallashtirish</li>
      </ul>

      <h3 style={styles.sectionTitle}>Maqsadlarim:</h3>
      <p style={styles.description}>
        Kelajakda yuqori darajadagi dasturchi bo'lish va yangi innovatsiyalar
        yaratish orqali insonlarga foyda keltirishni maqsad qilganman.
      </p>

      <div style={styles.imageContainer}>
        <img src={ozm} alt="O'zim" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    paddingLeft:"220px",
    fontSize: "1.8em",
    fontWeight: "bold",
    marginBottom: "45px",
    color: "#000",
  },
  description: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#000",
  },
  sectionTitle: {
    fontSize: "1.4em",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#000",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "20px",
  },
  listItem: {
    marginBottom: "8px",
    fontSize: "1em",
    color: "#000",
  },
  subText: {
    fontSize: "0.9em",
    color: "#000",
    marginLeft: "8px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  image: {
    width: "400px",
    height: "300px",
    borderRadius: "25%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    objectFit: "cover",
    },
};

export default Home;
