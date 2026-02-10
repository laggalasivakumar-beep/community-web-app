import React from "react";

const Community = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="community-hero">
        <div className="community-hero-content">
          <h1>Community Conversations & Local Happenings</h1>
          <p>
            Connect with neighbors, local groups, and events across Texas.
            Share ideas, ask questions, and stay updated — all in one trusted
            community space.
          </p>
          <button className="community-cta">Explore Community</button>
        </div>
      </section>

      {/* ABOUT COMMUNITY SECTION */}
      <section className="community-about">
        <div className="community-about-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Community Collaboration"
          />
        </div>

        <div className="community-about-content">
          <h2>About the Community</h2>
          <p>
            Community Hub is built to bring people together. Whether you are
            looking to participate in discussions, attend local events, or
            connect with like-minded groups, this space helps you stay engaged.
          </p>
          <p>
            Our goal is to create a respectful, safe, and helpful environment
            where every voice matters.
          </p>
        </div>
      </section>

      {/* COMMUNITY FEATURES */}
      <section className="community-sections">
        <h2>What You’ll Find Here</h2>

        <div className="community-cards">
          <div className="community-card">
            <h3>Latest Posts</h3>
            <p>
              Discover the newest discussions, updates, and announcements from
              members.
            </p>
          </div>

          <div className="community-card">
            <h3>Featured Events</h3>
            <p>
              Stay informed about meetups, workshops, and community activities.
            </p>
          </div>

          <div className="community-card">
            <h3>Topics & Groups</h3>
            <p>
              Explore discussions by Neighborhoods, Education, Business & more.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (IMAGE + FORM) */}
      <section className="community-contact">
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Contact Community"
          />
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>
            Have a question, suggestion, or want to collaborate?  
            Reach out to us anytime.
          </p>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        /* HERO */
        .community-hero {
          background: linear-gradient(135deg, #1e3a8a, #2563eb);
          padding: 110px 20px;
          text-align: left;
          color: #fff;
        }

        .community-hero-content {
          max-width: 800px;
          margin: 20px 20px 20px 20px;
        }

        .community-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .community-hero-content p {
          font-size: 1.1rem;
          color: #e5e7eb;
          margin-bottom: 30px;
        }

        .community-cta {
          background: #fff;
          color: #1e3a8a;
          border: none;
          padding: 14px 32px;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .community-cta:hover {
          background: #f1f5f9;
        }

        /* ABOUT */
        .community-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 80px 20px;
          max-width: 1200px;
          margin: auto;
          align-items: center;
        }

        .community-about-content h2 {
          color: #1e3a8a;
          font-size: 2.2rem;
          margin-bottom: 20px;
        }

        .community-about-content p {
          color: #555;
          margin-bottom: 15px;
          line-height: 1.7;
        }

        .community-about-image img {
          width: 100%;
          max-width: 600px;
        }

        /* FEATURES */
        .community-sections {
          background: #f9fafb;
          padding: 80px 20px;
          text-align: center;
        }

        .community-sections h2 {
          font-size: 2.3rem;
          margin-bottom: 40px;
        }

        .community-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
          max-width: 1100px;
          margin: auto;
        }

        .community-card {
          background: #fff;
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
        }

        .community-card h3 {
          color: #2563eb;
          margin-bottom: 10px;
        }

        .community-card p {
          color: #555;
          font-size: 0.95rem;
        }

        /* CONTACT */
        .community-contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 90px 20px;
          max-width: 1200px;
          margin: auto;
          align-items: center;
        }

        .contact-image img {
          width: 100%;
          max-width: 600px;
        }

        .contact-form h2 {
          font-size: 2.2rem;
          color: #1e3a8a;
          margin-bottom: 10px;
        }

        .contact-form p {
          color: #555;
          margin-bottom: 25px;
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 14px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 0.95rem;
        }

        .contact-form button {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
        }

        .contact-form button:hover {
          background: #1e40af;
        }

        @media (max-width: 768px) {
          .community-about,
          .community-contact {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Community;
