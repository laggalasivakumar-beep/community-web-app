import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 👈 paste here

  const fetchJobs = async () => {
    const { data } = await supabase
      .from("jobs")
      .select("*")
      .eq("status", "active")
      .order("created_at", { ascending: false });

    setJobs(data || []);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
  job.job_title
    ?.toLowerCase()
    .includes(searchTerm.toLowerCase())
);

  return (
    <div className="jobs-wrapper">

      {/* HERO SECTION */}
      <div className="jobs-hero">
        <h1>Find Your Dream Job</h1>
        <p>Explore verified opportunities, filter by title, and apply instantly from our trusted job portal.</p>
      </div>

      <div className="jobs-search">
  <i className="fa-solid fa-magnifying-glass"></i>
  <input
    type="text"
    placeholder="Search jobs by title..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
      <div className="jobs-grid">
        {filteredJobs.map((job, index) => (

          <div
            key={job.id}
            className="job-card animate"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Job Title */}
            <div className="job-title">
              <i className="fa-solid fa-briefcase"></i>
              <div>
                <span className="label">Job Title</span>
                <h4>{job.job_title}</h4>
              </div>
            </div>

            {/* Description */}
            <div className="job-field">
              <i className="fa-solid fa-file-lines"></i>
              <div>
                <span className="label">Description</span>
                <p>{job.job_description}</p>
              </div>
            </div>

            {/* Job Type */}
            <div className="job-field">
              <i className="fa-solid fa-clock"></i>
              <div>
                <span className="label">Job Type</span>
                <p>{job.job_type}</p>
              </div>
            </div>

            {/* Location */}
            <div className="job-field">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <span className="label">Location</span>
                <p>{job.location}</p>
              </div>
            </div>

            {/* Apply Button */}
            {job.apply_link && (
              <a
                href={job.apply_link}
                target="_blank"
                rel="noopener noreferrer"
                className="apply-btn"
              >
                <i className="fa-solid fa-paper-plane"></i> Apply Now
              </a>
            )}
          </div>
        ))}
      </div>

      {/* ADVANCED CSS */}
      <style>{`
      /* HERO SECTION */
.jobs-hero {
  width: 100vw; /* full viewport width */
  margin-left: calc(-50vw + 50%); /* stretch full width while keeping content centered */
  background: linear-gradient(135deg, #0f766e, #16a34a);
  color: white;
  padding: 60px 30px 40px 30px;
  text-align: left;
  border-radius: 0; /* optional: remove rounded corners for full-width */
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

        .jobs-wrapper {
          padding: 30px;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* CARD */
        .job-card {
          background: linear-gradient(145deg, #ffffff, #f4f7ff);
          border-top: 3px solid rgb(255, 107, 107);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          overflow: visible;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          transform-style: preserve-3d;
        }

        /* HOVER EFFECT */
        .job-card:hover {
  transform: scale(1.08) translateY(-5px);  /* smooth light zoom + lift */
  box-shadow: 0 25px 50px rgba(37,99,235,0.25);  /* deeper shadow */
  z-index: 5;
}


        /* FADE-UP ANIMATION */
        .animate {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.9s ease forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* TITLE */
        .job-title {
          display: flex;
          gap: 12px;
          align-items: baseline;
          color: white;
          padding: 20px 0px 0px 0px;
          border-radius: 12px;
        }

        .job-title i {
          width: 22px; 
          font-size: 1.4rem;
          color: #2563eb;
          text-align: center;
          flex-shrink: 0;
        }

        .job-title h4 {
          margin: 4px 0 0;
          font-size: 1.1rem;
          color:black;
        }

        /* FIELDS */
        .job-field {
          display: flex;
          gap: 10px;
          align-items: baseline;
        }

        .job-field i {
          font-size: 1rem;
          color: #2563eb;
          margin-top: 3px;
        }

        .label {
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: 700;
          color: #6b7280;
        }

        .job-field p {
          margin: 4px 0 0;
          color: #1f2937;
          font-size: 0.95rem;
        }

        .apply-btn {
        margin-top: auto;
        text-decoration: none;
        background: rgb(255, 107, 107);   /* ✅ updated */
        color: white;
        padding: 10px 16px;
        border-radius: 10px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        transition: all 0.3s ease;
      }

      .apply-btn:hover {
        background:#2563eb;     /* darker hover */
        transform: scale(1.05);
        color:white;
      }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .jobs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .jobs-grid {
            grid-template-columns: 1fr;
          }
        }
          .jobs-search {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 420px;
  margin-bottom: 25px;
  padding: 10px 14px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  border: 1px solid #0f766e;
}

.jobs-search i {
  color: #2563eb;
  font-size: 1rem;
}

.jobs-search input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 0.95rem;
}

      `}</style>
    </div>
  );
};

export default Jobs;
