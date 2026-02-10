import React from "react";

const WelcomeOnboarding = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Welcome to Community Hub</h1>
            <p>
              A trusted platform to connect people, businesses, jobs, and
              opportunities all in one place.
            </p>
            <button className="primary-btn">Go to Dashboard</button>
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="steps-section">
        <h2>Your Next Steps</h2>
        <h4 className="section-desc">
          Complete these simple steps to unlock everything Community Hub offers.
        </h4>

        <div className="steps-grid">
          <div className="step-card">
            <h3>Email Verification</h3>
            <p>Verify your email to secure your account.</p>
          </div>

          <div className="step-card">
            <h3>Complete Profile</h3>
            <p>Add your details so others can connect with you.</p>
          </div>

          <div className="step-card">
            <h3>Admin Review</h3>
            <p>We review new accounts for quality and trust.</p>
          </div>

          <div className="step-card">
            <h3>Start Exploring</h3>
            <p>Access jobs, classifieds, and community posts.</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2>What You Can Do After Approval</h2>

        <div className="features-grid">
          <div className="feature-card">
            <img src="https://illustrations.popsy.co/blue/online-shopping.svg" alt="" />
            <h4>Community</h4>
            <p>Join discussions and local conversations.</p>
          </div>

          <div className="feature-card">
            <img src="https://illustrations.popsy.co/blue/online-shopping.svg" alt="" />
            <h4>Jobs</h4>
            <p>Post or apply for local job opportunities.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://illustrations.popsy.co/blue/online-shopping.svg"
              alt=""
            />
            <h4>Classifieds</h4>
            <p>Buy, sell, or promote your listings.</p>
          </div>

          <div className="feature-card">
            <img src="https://illustrations.popsy.co/blue/online-shopping.svg" alt="" />
            <h4>Directory</h4>
            <p>Discover trusted businesses and services.</p>
          </div>
        </div>
      </section>

      {/* HELP SECTION */}
      <section className="help-section">
        <div className="help-inner">
          <div className="help-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Help"
            />
          </div>

          <div className="help-form">
            <h2>Need Help?</h2>
            <p>Have questions? Send us a message.</p>

            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        body {
          background: #f9fafb;
        }

        /* HERO */
        .hero {
          background: linear-gradient(135deg, #0f766e, #16a34a);
          padding: 80px 20px;
          color: white;
        }

        .hero-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .hero-content p {
          font-size: 1.1rem;
          margin-bottom: 25px;
          opacity: 0.95;
        }

        .primary-btn {
          padding: 12px 26px;
          border: none;
          background: #fff;
          color: #1e40af;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
        }

        .hero-image img {
          width: 100%;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        /* STEPS */
        .steps-section {
          padding: 70px 20px;
          text-align: center;
        }
          .steps-section h3{
          color:white;
        }
          .steps-section p{
          color:white;
        }

        .steps-section h2 {
          font-size: 2.2rem;
          color:black;
        }

        .section-desc {
          margin: 15px auto 40px;
          max-width: 700px;
        }

        .steps-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
        }

        .step-card {
          background: linear-gradient(135deg, #0f766e, #16a34a);
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
        }

        /* FEATURES */
        .features-section {
          background: #f1f5f9;
          padding: 70px 20px;
          text-align: center;
        }

        .features-grid {
          max-width: 1100px;
          margin: 40px auto 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .feature-card {
          background: white;
          padding: 25px;
          border-radius: 16px;
          transition: transform 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-6px);
        }

        .feature-card img {
          width: 120px;
          margin-bottom: 15px;
        }

        /* HELP */
        .help-section {
          padding: 80px 20px;
        }

        .help-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: top;
        }

        .help-form form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .help-form input,
        .help-form textarea {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }

        .help-form button {
          background: #2563eb;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
          .help-image img {
          width: 100%;
          max-width: 600px;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .hero-inner,
          .help-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default WelcomeOnboarding;
