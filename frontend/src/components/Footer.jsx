import { Link } from "react-router-dom";

const Footer = () => {
  const logoUrl = "src/assets/communityhub-logo 1.png"; // same logo as header

  return (
    <footer style={styles.footer}>
      {/* Section 1: Logo + Description */}
      <div style={styles.section}>
        <img src={logoUrl} alt="CommunityHub Logo" style={styles.logo} />
        <p style={styles.text}>
          CommunityHub is a platform that connects people, jobs,
          and opportunities in one place.
        </p>
        <p style={styles.text}>
          Build connections. Grow together.
        </p>
      </div>

      {/* Section 2: Menu Links */}
      <div style={styles.sectionCenter}>
        <h4 style={styles.heading}>Quick Links</h4>
        <Link to="/" style={styles.footerLink}>Home</Link>
        <Link to="/welcome" style={styles.footerLink}>Welcome</Link>
        <Link to="/community" style={styles.footerLink}>Community</Link>
        <Link to="/directory" style={styles.footerLink}>Directory</Link>
        <Link to="/jobs" style={styles.footerLink}>Jobs</Link>
        <Link to="/classifieds" style={styles.footerLink}>Classifieds</Link>
      </div>

      {/* Section 3: Contact Info */}
      <div style={styles.sectionRight}>
        <h4 style={styles.heading}>Contact Us</h4>
        <p style={styles.text}>📞 +91 98765 43210</p>
        <p style={styles.text}>✉️ support@communityhub.com</p>
        <p style={styles.text}>
          📍 Hyderabad, Telangana, India
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: "flex",
    backgroundColor: "#222",
    color: "#fff",
    padding: "40px 30px",
    width: "100%",
    boxSizing: "border-box",
  },

  section: {
    flex: "1",
    maxWidth: "25%",
  },

  sectionCenter: {
    flex: "2",
    maxWidth: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },

  sectionRight: {
    flex: "1",
    maxWidth: "25%",
    textAlign: "center",
  },

  logo: {
    height: "110px",
    marginBottom: "10px",
  },

  heading: {
    marginBottom: "10px",
    fontSize: "16px",
  },

  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "4px 0",
    color: "#ccc",
  },

  footerLink: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Footer;
