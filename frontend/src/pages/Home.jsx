export default function Home() {
  return (
    <div className="home">

      {/* INTERNAL CSS */}
      <style>{`
        .home {
          font-family: "Segoe UI", sans-serif;
          color: #222;
        }

        /* HERO */
        .hero {
          background: linear-gradient(135deg, #0f766e, #16a34a);
          color: #fff;
          padding: 90px 0px 50px 70px;
          text-align: left;
        }

        .hero h1 {
        font-size: 42px;
        margin-bottom: 15px;
        padding-right: 20px;

        opacity: 0;
        transform: translateY(30px);
        animation: slideUp 0.8s ease-out forwards;
      }

      @keyframes slideUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }


        .hero h3 {
          width:195px;
          font-size: 20px;
          margin-bottom: 15px;
          padding: 0px 0px 0px 20px;
          border-radius: 5px;
          background-color:rgb(255, 107, 107);
          opacity: 0;
        transform: translateY(30px);
        animation: slideUp 0.8s ease-out forwards;
      }

      @keyframes slideUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
  
        }

        .hero p {
          max-width: 700px;
          font-size: 18px;
          line-height: 1.6;
          text-align:left;
        }

        .hero-links {
          margin-top: 30px;
          padding:0px 20px 0px 0px;
          opacity: 0;
        transform: translateY(30px);
        animation: slideUp 0.8s ease-out forwards;
      }

      @keyframes slideUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
        }

        .hero-links a {
          margin: 0px 8px 8px 0px;
          padding: 10px 20px 10px 20px;
          background: #fff;
          color: #0f766e;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
        }

        /* ABOUT */
        .about {
          display: flex;
          gap: 30px;
          padding: 70px 80px 70px 70px;
          align-items: center;
        }

        .about img {
          max-width: 550px;
          width: 100%;
          border-radius: 5px;
          
        }

        .about-content h2 {
          font-size: 32px;
          color:#FF6B70;
          margin-bottom: 15px;
        }

        .about-content p {
          line-height: 1.7;
          margin-bottom: 12px;
          color: #000000ff;
          text-align: justify;
          }

        /* FEATURES */
        .features {
          background: #f9fafb;
          padding: 0px 50px 30px 50px ;
          text-align: center;
        }

        .features h2 {
          font-size: 32px;
          margin-bottom: 40px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }

        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #0f766e;
          padding: 25px;
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          text-align: left;
          
        }
          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 18px 35px rgba(0,0,0,0.15);
          }

        .feature-card h3 {
          color: white;
          margin-bottom: 10px;
        }

        .feature-card p {
          color: white;
          line-height: 1.6;
        }

        /* CONTACT */
        .contact {
  padding: 60px 20px;
  background: #f9f9f9;
}

.contact-container {
  max-width: 1100px;
  margin: 40px 0px 20px 20px;
  display: flex;
  gap: 40px;
  align-items: center;
}

.contact-image {
  flex: 1;
}

.contact-image img {
  width: 100%;
  border-radius: 12px;
}

.contact-form-box {
  flex: 1;
}

.contact-form-box h2 {
  margin-bottom: 10px;
}

.contact-form-box p {
  margin-bottom: 20px;
  color: #666;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.contact-form button {
  padding: 12px 20px;
  background: #0f766e;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }
}


        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about {
            flex-direction: column;
            text-align: center;
          }
      
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <h3>Community Hub</h3>
        <h1>Your Gateway to Trusted Businesses, Jobs & Community Resources</h1>
        <p>
          A secure community platform with self-registration, admin approval,
          directories, jobs, and classifieds — designed for speed and simplicity.
        </p>

        <div className="hero-links">
          <a href="/directory">Directory</a>
          <a href="/jobs">Jobs</a>
          <a href="/classifieds">Classifieds</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Community"
        />

        <div className="about-content">
          <h2 class="sam1">Welcome Community Hub</h2>
          <p>
            This platform is designed to empower verified users by offering a secure and structured
            self-registration process, followed by admin approval. This two-step verification ensures
            that only genuine and trusted members become part of the community, creating a safe and
            reliable environment for everyone.Once approved, users gain access to a fast-loading and
            user-friendly homepage that serves as a central hub for opportunities, resources, and
            connections. The prominently displayed links directory enables users to quickly discover
            businesses, services, jobs, classifieds, and community updates without confusion or delays.
          </p>
          <p>
            With a strong focus on speed, security, and ease of use, the platform helps users save time,
             build meaningful connections, and confidently explore opportunities—all within a trusted
            digital ecosystem.
          </p>
          
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Platform Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Community</h3>
            <p>
              Engage with trusted members and build meaningful relationships in
              a protected community space.
            </p>
          </div>

          <div className="feature-card">
            <h3>Directory</h3>
            <p>
              Access a curated directory directly from the homepage for easy
              navigation.
            </p>
          </div>

          <div className="feature-card">
            <h3>Jobs</h3>
            <p>
              Discover job opportunities shared within the community and visible
              to approved users only.
            </p>
          </div>

          <div className="feature-card">
            <h3>Classifieds</h3>
            <p>
              Buy, sell, or promote services with simple and fast classifieds.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
  <div className="contact-container">
    
    {/* Left Side Image */}
    <div className="contact-image">
      <img 
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
        alt="Contact Us"
      />
    </div>

    {/* Right Side Form */}
    <div className="contact-form-box">
      <h2>Contact Us</h2>
      <p>Have questions or need support? Reach out to us.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>
</section>


    </div>
  );
}
