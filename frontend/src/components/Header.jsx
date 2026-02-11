import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // ✅ MUST

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img
          src="/communityhub-logo-1.png"
          alt="Logo"
          style={styles.logo}
        />
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/welcome" style={styles.link}>Welcome</Link>
        <Link to="/community" style={styles.link}>Community</Link>
        <Link to="/directory" style={styles.link}>Directory</Link>
        <Link to="/jobs" style={styles.link}>Jobs</Link>
        <Link to="/classifieds" style={styles.link}>Classifieds</Link>
      </nav>

      {/* Login Button */}
      <div style={styles.signInContainer}>
        <button
          type="button"
          onClick={() => navigate("/login")}   // ✅ works now
          style={styles.signInButton}
        >
          Login
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 30px 0px 20px",
    backgroundColor: "white",
    width: "100vw",
    boxSizing: "border-box",
  },
  logoContainer: {
    flex: 1,
    maxWidth: "25%",
  },
  logo: {
    height: "120px",
    borderRadius: "5px",
    maxWidth: "100%",
  },
  nav: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    maxWidth: "50%",
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  },
  signInContainer: {
    flex: 1,
    maxWidth: "25%",
    display: "flex",
    justifyContent: "center",
  },
  signInButton: {
    backgroundColor: "#ff6b6b",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default Header;
