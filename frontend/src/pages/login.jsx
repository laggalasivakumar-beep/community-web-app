import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="auth-page">
        {showRegister ? <RegisterForm /> : <LoginForm />}

        <p className="auth-toggle-text">
          {showRegister ? "Already have an account?" : "Don’t have an account?"}
          <span onClick={() => setShowRegister(!showRegister)}>
            {showRegister ? " Login" : " Register"}
          </span>
        </p>
      </div>

      {/* CSS – SAFE INLINE STYLES */}
      <style>{`
        .auth-page {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
        }

        .auth-toggle-text {
          margin: 0px 5px 50px 5px;
          font-size: 20px;
          text-align: center;
          color: #555;
        }

        .auth-toggle-text span {
          margin-left: 6px;
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
        }

        .auth-toggle-text span:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default LoginPage;
