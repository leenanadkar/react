// src/components/Footer.js
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 User Profile App. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    padding: "10px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
