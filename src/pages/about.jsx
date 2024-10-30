import React from "react";
import ozm from "../assets/ozm.jpg"

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>O'zim Haqimda</h2>
      <h1>Olimov Nurmuhammad Yoqubjon o'g'li</h1>
      <p style={styles.description}>
         Dasturlash va veb-ishlanma sohasida tajribaga ega
        bo'lib, yangi texnologiyalar va dizayn yo'nalishida o'zimni
        rivojlantirishni maqsad qilganman. 
      </p>

      <h3 style={styles.sectionTitle}>Qiziqishlarim:</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          O'yinlar
          <p style={styles.subText}>Pubg, Call of Duty, PES</p>
        </li>
        <li style={styles.listItem}>
          Sport <span style={styles.subText}>(Futbol, Volleyball)</span>
        </li>
      </ul>

      <h3 style={styles.sectionTitle}>Malakalarim:</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>JavaScript, React, Node.js</li>
        <li style={styles.listItem}>HTML, CSS, Tailwind CSS</li>
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
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "1.8em",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  description: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#555",
  },
  sectionTitle: {
    fontSize: "1.4em",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#444",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "20px",
  },
  listItem: {
    marginBottom: "8px",
    fontSize: "1em",
    color: "#333",
  },
  subText: {
    fontSize: "0.9em",
    color: "#777",
    marginLeft: "8px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    objectFit: "cover",
  },
};

export default Home;
