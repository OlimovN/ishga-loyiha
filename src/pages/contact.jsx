import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Aloqa</h2>
      <p style={styles.description}>
        Menga xabar qoldirishingiz yoki quyidagi ijtimoiy tarmoqlar orqali
        bog'lanishingiz mumkin:
      </p>

      <ul style={styles.socialList}>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            Instagram
          </a>
        </li>
      </ul>

      <h3 style={styles.subtitle}>Qo'shimcha Ma'lumotlar:</h3>
      <p style={styles.contactInfo}>Telefon: +998 (88) 273-22-36</p>
      <p style={styles.contactInfo}>Qo'shimcha telefon: +998 (90) 273-22-36</p>
      <p style={styles.contactInfo}>Manzil: Yozyavon, Farg'ona, O'zbekiston</p>
      <a
        href="https://satellites.pro/Google_plan/Yozyovon_map"
        style={styles.locationLink}
      >
        Location
      </a>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Elektron Pochta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Xabar"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>
          Jo'natish
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#000",
  },
  title: {
    fontSize: "1.8em",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#000",
  },
  description: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#000",
  },
  socialList: {
    listStyleType: "none",
    padding: "0",
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },
  socialLink: {
    textDecoration: "none",
    color: "#CC2B52",
    fontSize: "1em",
    fontWeight: "600",
    transition: "color 0.3s ease",
  },
  subtitle: {
    fontSize: "1.4em",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#000",
  },
  contactInfo: { fontSize: "1em", color: "#000", marginBottom: "8px" },
  locationLink: {
    color: "#CC2B52",
    textDecoration: "none",
    fontSize: "1em",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    backgroundColor: "#f0f0f0",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },
  textarea: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "100px",
    backgroundColor: "#f8f8f8",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },
  button: {
    padding: "10px",
    fontSize: "1em",
    fontWeight: "bold",
    backgroundColor: "#9aaf73",
    color: "#555",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
};

export default Contact;
