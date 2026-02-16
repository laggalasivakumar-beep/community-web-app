import React from "react";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="community-hero">
        <div className="community-hero-content">
          <h1>Community Conversations & Local Happenings</h1>
          <p>
            Connect with neighbors, local groups, and events across Texas.
            Share ideas, ask questions, and stay updated — all in one trusted space.
          </p>
          <button
            className="community-cta"
            onClick={() => navigate("/login")}
          >
            Login / Register
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="community-about">
        <div className="community-about-image">
          <img
            src="/communityhub about.png"
            alt="Community Collaboration"
          />
        </div>

        <div className="community-about-content">
          <h2>About The Community</h2>
          <p>
            Community Hub is designed to bring individuals, families, and
            businesses together in one structured and secure digital environment.
            Every member joins through a verified process to ensure authenticity
            and trust within the ecosystem.
          </p>
          <p>
            Whether you are looking to participate in meaningful discussions,
            stay informed about local happenings, collaborate with professionals,
            or simply connect with neighbors, this platform acts as your central
            space for engagement. We focus on safety, respect, and real
            interaction — building stronger local networks through technology.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="community-sections">
        <h2 className="features-heading">What You’ll Find Here</h2>

        <div className="community-cards">

          <div className="community-card">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="Posts" />
            <div className="card-content">
              <h3>Latest Posts</h3>
              <p>Explore real-time discussions and community updates.</p>
            </div>
          </div>

          <div className="community-card">
            <img src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80" alt="Events" />
            <div className="card-content">
              <h3>Featured Events</h3>
              <p>Stay updated with meetups, workshops, and local activities.</p>
            </div>
          </div>

          <div className="community-card">
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80" alt="Groups" />
            <div className="card-content">
              <h3>Topics & Groups</h3>
              <p>Join neighborhood, education, and business discussions.</p>
            </div>
          </div>

        </div>
      </section>

      {/* REDESIGNED CTA SECTION */}
      <section className="community-cta-section">
        <div className="cta-box">
          <h2>Be Part of Something Meaningful</h2>
          <p>
            Join a growing community where collaboration, trust, and
            opportunities come together in one powerful platform.
          </p>
          <button onClick={() => navigate("/login")}>
            Join Community Today
          </button>
        </div>
      </section>

      <style>{`

      *{box-sizing:border-box;}
      body{margin:0;font-family:Segoe UI, sans-serif;}

      /* HERO */
      .community-hero{
        background:linear-gradient(135deg, #0f766e, #16a34a);
        padding:120px 20px;
        color:white;
      }

      .community-hero-content{
        max-width:900px;
        margin-left:60px;
      }

      .community-hero h1{
        font-size:clamp(2rem,4vw,3rem);
        white-space:nowrap;
      }

      .community-hero p{
        margin-top:20px;
        line-height:1.6;
        max-width:600px;
      }

      .community-cta{
        margin-top:30px;
        padding:14px 32px;
        border:none;
        border-radius:10px;
        background:white;
        color:#0f766e;
        font-weight:600;
        cursor:pointer;
        transition:.3s;
      }

      .community-cta:hover{
        transform:translateY(-4px);
        box-shadow:0 10px 25px rgba(0,0,0,0.2);
      }

      /* ABOUT */
      .community-about{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:60px;
        padding:100px 20px;
        max-width:1200px;
        margin:auto;
        align-items:center;
      }

      .community-about-content h2{
        color:black;
        font-size:2.2rem;
        margin-bottom:20px;
      }

      .community-about-content p{
        text-align:justify;
        line-height:1.8;
        color:#444;
        margin-bottom:15px;
      }

      .community-about-image img{
        width:100%;
        border-radius:20px;
        object-fit:cover;
      }

      /* FEATURES */
      .community-sections{
        background:#f8fafc;
        padding:100px 20px;
        text-align:center;
      }

      .features-heading{
        font-size:2.4rem;
        margin-bottom:60px;
        color:black; /* Changed to Black */
      }

      .community-cards{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
        gap:40px;
        max-width:1200px;
        margin:auto;
      }

      .community-card{
        background:white;
        border-radius:20px;
        overflow:hidden;
        box-shadow:0 15px 40px rgba(0,0,0,0.08);
        transition:.4s;
      }

      .community-card:hover{
        transform:translateY(-15px);
      }

      .community-card img{
        width:100%;
        height:220px;
        object-fit:cover;
        transition:.4s;
      }

      .community-card:hover img{
        transform:scale(1.05);
      }

      .card-content{
        padding:25px;
      }

      .card-content h3{
        color:#1e3a8a;
        margin-bottom:10px;
      }

      /* NEW PREMIUM CTA DESIGN */
      .community-cta-section{
        padding:50px 20px 50px 20px;
        margin-bottom:30px;
        background:linear-gradient(135deg, #0f766e, #16a34a);
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .cta-box{
        background:rgba(255,255,255,0.1);
        backdrop-filter:blur(15px);
        padding:60px;
        border-radius:25px;
        text-align:center;
        color:white;
        max-width:800px;
        box-shadow:0 25px 60px rgba(0,0,0,0.25);
      }

      .cta-box h2{
        font-size:2.5rem;
        margin-bottom:20px;
      }

      .cta-box p{
        font-size:1.1rem;
        line-height:1.7;
      }

      .cta-box button{
        margin-top:30px;
        padding:14px 40px;
        border:none;
        border-radius:50px;
        background:white;
        color:#1e3a8a;
        font-weight:600;
        cursor:pointer;
        transition:.3s;
      }

      .cta-box button:hover{
        transform:translateY(-5px);
        box-shadow:0 12px 30px rgba(0,0,0,0.3);
      }

      /* RESPONSIVE */
      @media(max-width:900px){
        .community-about{
          grid-template-columns:1fr;
        }

        .community-hero-content{
          margin-left:0;
        }

        .community-hero h1{
          white-space:normal;
        }

        .cta-box{
          padding:40px 25px;
        }
      }

      `}</style>
    </>
  );
};

export default Community;
