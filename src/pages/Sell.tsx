import { useState } from "react"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"

/* ---------------- Types ---------------- */

type Stage = "login" | "register" | "profile" | "intro" | "sell"

/* ---------------- Sell Flow ---------------- */

const SellFlow: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [stage, setStage] = useState<Stage>("login")

  const handleAuthSuccess = () => {
    setIsLoggedIn(true)
    setStage("profile")
  }

  return (
    <div style={styles.page}>
      {!isLoggedIn && stage === "login" && (
        <Login
          onLogin={handleAuthSuccess}
          onRegister={() => setStage("register")}
        />
      )}

      {!isLoggedIn && stage === "register" && (
        <Register
          onRegister={handleAuthSuccess}
          onLogin={() => setStage("login")}
        />
      )}

      {isLoggedIn && stage === "profile" && (
        <Profile onSell={() => setStage("intro")} />
      )}

      {isLoggedIn && stage === "intro" && (
        <SellIntro onStart={() => setStage("sell")} />
      )}

      {isLoggedIn && stage === "sell" && <SellForm />}
    </div>
  )
}

export default SellFlow

/* ---------------- Profile ---------------- */

const Profile = ({ onSell }: any) => (
  <div style={styles.profile}>
    <h2>Welcome to STUVO 👋</h2>
    <p>Start selling your unused books & earn money</p>

    <div style={styles.cards}>
      <Card title="Earn Money" text="Turn old books into cash" />
      <Card title="Fast Listing" text="List books in under 2 minutes" />
      <Card title="Direct Buyers" text="No middlemen" />
    </div>

    <button style={styles.primaryBtnBig} onClick={onSell}>
      Sell Your Books
    </button>
  </div>
)

/* ---------------- Intro ---------------- */

const SellIntro = ({ onStart }: any) => (
  <div style={styles.intro}>
    <h1>Sell your books smarter</h1>
    <p style={styles.tag}>Upload • Price • Publish</p>

    <div style={styles.steps}>
      <Step n="1" text="Upload your book details" />
      <Step n="2" text="Set your own selling price" />
      <Step n="3" text="Publish & start earning" />
    </div>

    <div style={styles.benefits}>
      <Benefit text="Earn money from unused books" />
      <Benefit text="No commission charges" />
      <Benefit text="Direct buyer contact" />
      <Benefit text="Fast & secure selling" />
    </div>

    <button style={styles.primaryBtnBig} onClick={onStart}>
      Start Selling
    </button>
  </div>
)

/* ---------------- Sell Form ---------------- */

const SellForm = () => (
  <form style={styles.form}>
    <h2>List Your Book</h2>

    <input placeholder="Seller Name" required />
    <input placeholder="Book Name" required />
    <input placeholder="Original Price (₹)" required />
    <input placeholder="Your Selling Price (₹)" required />
    <input placeholder="Discount % (Optional)" />

    <button style={styles.primaryBtn}>List Book</button>
  </form>
)

/* ---------------- Small Components ---------------- */

const Card = ({ title, text }: any) => (
  <div style={styles.card}>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
)

const Step = ({ n, text }: any) => (
  <div style={styles.step}>
    <span>{n}</span>
    <p>{text}</p>
  </div>
)

const Benefit = ({ text }: any) => (
  <div style={styles.benefit}>✓ {text}</div>
)

/* ---------------- Styles ---------------- */

const green = "#8effb3"

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "#fff",
    padding: "40px 20px"
  },

  profile: {
    maxWidth: "900px",
    margin: "60px auto",
    textAlign: "center"
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    margin: "30px 0"
  },

  card: {
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid #eee"
  },

  intro: {
    maxWidth: "900px",
    margin: "60px auto",
    textAlign: "center"
  },

  tag: {
    color: "#555",
    marginBottom: "30px"
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "18px",
    marginBottom: "30px"
  },

  step: {
    padding: "18px",
    borderRadius: "14px",
    border: "1px solid #eee"
  },

  benefits: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "12px",
    marginBottom: "30px"
  },

  benefit: {
    padding: "14px",
    borderRadius: "12px",
    background: "#f9f9f9"
  },

  form: {
    maxWidth: "500px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "16px",
    border: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },

  primaryBtn: {
    background: green,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontWeight: 600,
    cursor: "pointer"
  },

  primaryBtnBig: {
    background: green,
    padding: "16px 40px",
    borderRadius: "14px",
    border: "none",
    fontWeight: 600,
    fontSize: "16px",
    cursor: "pointer"
  }
}
