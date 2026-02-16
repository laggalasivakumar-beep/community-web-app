import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-container">

          {/* LEFT SIDE DESIGN PANEL */}
          <div className="auth-left">
            <div className="auth-left-content">
              <h1>Welcome Back</h1>
              <p>
                Securely access your community portal.
                Connect, collaborate, and explore opportunities.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="auth-right">
            <div className="auth-card">
              {showRegister ? <RegisterForm /> : <LoginForm />}

              <p className="auth-toggle-text">
                {showRegister
                  ? "Already have an account?"
                  : "Don’t have an account?"}
                <span onClick={() => setShowRegister(!showRegister)}>
                  {showRegister ? " Login" : " Register"}
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`

      *{
        box-sizing:border-box;
      }

      body{
        margin:0;
        font-family: 'Segoe UI', sans-serif;
      }

      /* FULL PAGE BACKGROUND */
      .auth-wrapper{
        min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background:linear-gradient(135deg,#1e3a8a,#2563eb,#0f766e);
        padding:40px 20px;
      }

      /* MAIN CONTAINER */
      .auth-container{
        width:100%;
        max-width:1100px;
        display:grid;
        grid-template-columns:1fr 1fr;
        background:rgba(255,255,255,0.1);
        backdrop-filter:blur(20px);
        border-radius:25px;
        overflow:hidden;
        box-shadow:0 25px 60px rgba(0,0,0,0.3);
        animation:fadeIn .8s ease;
      }

      /* LEFT SIDE */
      .auth-left{
        background:linear-gradient(135deg,#0f172a,#1e3a8a);
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:60px;
        position:relative;
      }

      .auth-left::before{
        content:"";
        position:absolute;
        width:300px;
        height:300px;
        background:rgba(255,255,255,0.08);
        border-radius:50%;
        top:-100px;
        right:-100px;
      }

      .auth-left-content h1{
        font-size:2.5rem;
        margin-bottom:20px;
      }

      .auth-left-content p{
        font-size:1rem;
        line-height:1.7;
        opacity:0.85;
      }

      /* RIGHT SIDE */
      .auth-right{
        background:white;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:60px 40px;
      }

      .auth-card{
        width:100%;
        max-width:400px;
        animation:slideUp .6s ease;
      }

      /* TOGGLE TEXT */
      .auth-toggle-text{
        margin-top:25px;
        font-size:15px;
        text-align:center;
        color:#555;
      }

      .auth-toggle-text span{
        margin-left:6px;
        color:#2563eb;
        font-weight:600;
        cursor:pointer;
        transition:.3s;
      }

      .auth-toggle-text span:hover{
        color:#1e40af;
        text-decoration:underline;
      }

      /* ANIMATIONS */
      @keyframes fadeIn{
        from{opacity:0; transform:scale(.95);}
        to{opacity:1; transform:scale(1);}
      }

      @keyframes slideUp{
        from{opacity:0; transform:translateY(20px);}
        to{opacity:1; transform:translateY(0);}
      }

      /* RESPONSIVE */
      @media(max-width:900px){
        .auth-container{
          grid-template-columns:1fr;
        }

        .auth-left{
          display:none;
        }

        .auth-right{
          padding:40px 25px;
        }
      }

      `}</style>
    </>
  );
};

export default LoginPage;
