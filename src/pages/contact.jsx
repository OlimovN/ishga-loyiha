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
      <a href="https://satellites.pro/Google_plan/Yozyovon_map">Location</a>

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
  },

  subtitle: {
    fontSize: "1.4em",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#000",
  },
  contactInfo: { fontSize: "1em", color: "#000", marginBottom: "8px" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "10px",
    backgroundColor: "#4f807d",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "100px",
    backgroundColor: "#88dd77",
  },
  button: {
    padding: "10px",
    fontSize: "1em",
    fontWeight: "bold",
    backgroundColor: "#9aaf73",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Contact;
