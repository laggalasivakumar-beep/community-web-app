import { useState } from "react";
import { registerUser } from "../../services/authService";



const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    companyName: "",
    category: "",
    companyAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateUsername = (username) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{7,15}$/;
    return regex.test(username);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  // Mandatory check
  for (let key in formData) {
    if (!formData[key].trim()) {
      setError("All fields are mandatory");
      return;
    }
  }

  if (!validateUsername(formData.username)) {
    setError(
      "Username must be 7-15 chars with uppercase, lowercase, number & special character"
    );
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  // ❗ Remove confirmPassword before sending to DB
  const { confirmPassword, ...dataToSend } = formData;

  // ✅ SEND TO SUPABASE
  await registerUser(dataToSend);

  // Optional: reset form
  setFormData({
    username: "",
    name: "",
    email: "",
    phone: "",
    companyName: "",
    category: "",
    companyAddress: "",
    password: "",
    confirmPassword: "",
  });
};


  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={{ color: "rgb(255, 107, 107)", textAlign: "center" }}>Company Registration</h2>

        {error && <p style={styles.error}>{error}</p>}

        {/* Username */}
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Full Name */}
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Phone */}
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Company Name */}
        <input
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Category */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select Category</option>
          <option value="IT">IT</option>
          <option value="Non-IT">Non-IT</option>
        </select>

        {/* Company Address (Simple) */}
        <textarea
          name="companyAddress"
          placeholder="Company Address"
          value={formData.companyAddress}
          onChange={handleChange}
          style={styles.textarea}
          required
        />

        {/* Password */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Confirm Password */}
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};


const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f4f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "22px",
    width: "420px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "95%",
    padding: "9px",
    marginBottom: "9px",
  },
  textarea: {
    width: "95%",
    padding: "9px",
    height: "55px", // ✅ simple small address
    marginBottom: "9px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#ff6b6b",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
    textAlign: "center",
  },
};

export default RegisterForm;