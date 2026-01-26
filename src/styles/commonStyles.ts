export const green = "#8effb3"

export const styles = {
  centerCard: {
    maxWidth: "420px",
    margin: "100px auto",
    padding: "35px",
    borderRadius: "16px",
    border: "1px solid #eee",
    display: "flex",
    flexDirection: "column" as const,
    gap: "14px",
    textAlign: "center" as const
  },

  primaryBtn: {
    background: green,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontWeight: 600,
    cursor: "pointer"
  },

  link: {
    color: "#000",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "14px"
  }
}
