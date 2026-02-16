import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/authService";
import supabase from "../../config/supabaseClient";

const LoginForm = () => {
  const navigate = useNavigate();

  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  // USERNAME / PASSWORD LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const user = await loginUser(username, password);
    if (user) navigate("/dashboard");
  };

  // GOOGLE LOGIN
  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) alert(error.message);
  };

  // EMAIL OTP
  const loginWithEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) alert("Check your email for login link");
    else alert(error.message);
  };

  // PHONE OTP
  const loginWithPhone = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const { error } = await supabase.auth.signInWithOtp({ phone });
    if (!error) alert("OTP sent to mobile");
    else alert(error.message);
  };

  return (
    <>
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input name="username" placeholder="Username" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>

          {/* ALT LOGIN */}
          <div className="alt-login">
            <div className="icon-row">

              {/* GOOGLE */}
  <button type="button" className="icon-btn" onClick={loginWithGoogle}>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
  </button>

  {/* EMAIL */}
  <button
    type="button"
    className="icon-btn"
    onClick={() => {
      setShowEmail(!showEmail);
      setShowPhone(false);
    }}
  >
    <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" />
  </button>

  {/* PHONE */}
  <button
    type="button"
    className="icon-btn"
    onClick={() => {
      setShowPhone(!showPhone);
      setShowEmail(false);
    }}
  >
    <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" />
  </button>

  {/* WHATSAPP */}
<button type="button" className="icon-btn">
  <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" />
</button>


  {/* APPLE */}
  <button type="button" className="icon-btn">
    <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" />
  </button>
            </div>

            {showEmail && (
              <form onSubmit={loginWithEmail} className="otp-form">
                <input name="email" placeholder="Enter your email" required />
                <button type="submit">Send OTP</button>
              </form>
            )}

            {showPhone && (
              <form onSubmit={loginWithPhone} className="otp-form">
                <input name="phone" placeholder="+91XXXXXXXXXX" required />
                <button type="submit">Send OTP</button>
              </form>
            )}
          </div>
        </form>
      </div>

      {/* EXISTING CSS + NEW */}
      <style>{`
        .login-page {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .login-form {
  background: #ffffff;
  padding: 20px 40px 40px 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 520px;   /* previously 420px */
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}


        .login-form h2 {
          text-align: center;
          margin-bottom: 25px;
          color: #1e40af;
        }

        .login-form input {
          padding: 12px 14px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 0.95rem;
        }

        .login-form button {
          margin-top: 10px;
          padding: 12px;
          border-radius: 8px;
          background: linear-gradient(135deg, #0f766e, #16a34a);
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }

        /* NEW UI */
        .alt-login { margin-top: 25px; }

        .icon-row {
  display: flex;
  gap: 10px;
}

.icon-btn {
  flex: 1;
  background: #f1f5f9 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 10px;
  transition: 0.3s ease;
}

.icon-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.1);
}


        .icon-btn img {
          width: 22px;
        }

        .otp-form {
          margin-top: 15px;
          display: flex;
          gap: 8px;
        }

        .otp-form input { flex: 1; margin-bottom: 0; }
      `}</style>
    </>
  );
};

export default LoginForm;