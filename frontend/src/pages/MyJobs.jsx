import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const MyJobs = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [jobs, setJobs] = useState([]);
  const [editJobId, setEditJobId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const fetchJobs = async () => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error) setJobs(data || []);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const startEdit = (job) => {
    setEditJobId(job.id);
    setEditForm({ ...job });
  };

  const saveEdit = async () => {
    const { error } = await supabase
      .from("jobs")
      .update({
        job_title: editForm.job_title,
        job_description: editForm.job_description,
        job_type: editForm.job_type,
        location: editForm.location,
        apply_link: editForm.apply_link,
      })
      .eq("id", editJobId);

    if (error) {
      alert("Update failed ❌");
      return;
    }

    setEditJobId(null);
    fetchJobs();
  };

  return (
    <div className="myjobs-wrapper">
      <h3 className="title">My Posted Jobs</h3>

      {jobs.length === 0 && <p>No jobs posted yet.</p>}

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            {editJobId === job.id ? (
              <>
                <input
                  value={editForm.job_title || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, job_title: e.target.value })
                  }
                  placeholder="Job Title"
                />

                <textarea
                  value={editForm.job_description || ""}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      job_description: e.target.value,
                    })
                  }
                  placeholder="Job Description"
                />

                <input
                  value={editForm.job_type || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, job_type: e.target.value })
                  }
                  placeholder="Job Type"
                />

                <input
                  value={editForm.location || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, location: e.target.value })
                  }
                  placeholder="Location"
                />

                <input
                  value={editForm.apply_link || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, apply_link: e.target.value })
                  }
                  placeholder="Apply Link"
                />

                <div className="actions">
                  <button className="save-btn" onClick={saveEdit}>
                    Save
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setEditJobId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="field">
                  <b>Job Title:</b> {job.job_title}
                </div>
                <div className="field">
                  <b>Description:</b> {job.job_description}
                </div>
                <div className="field">
                  <b>Type:</b> {job.job_type}
                </div>
                <div className="field">
                  <b>Location:</b> {job.location}
                </div>

                <button
                  className="edit-btn"
                  onClick={() => startEdit(job)}
                >
                  Edit Job
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* CSS – UNCHANGED */}
      <style>{`
        .myjobs-wrapper {
          padding: 20px;
          margin: 10px 10px 10px 120px;
        }

        .title {
          margin: 20px 0;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .job-card {
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #000;
          padding: 25px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field {
          font-size: 0.9rem;
          color: #333;
        }

        input, textarea {
          width: 100%;
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #ccc;
          margin-bottom: 8px;
        }

        textarea {
          min-height: 80px;
        }

        .edit-btn {
          margin-top: auto;
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        .save-btn {
          background: #16a34a;
          color: #fff;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
        }

        .cancel-btn {
          background: #e5e7eb;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
        }

        @media (max-width: 1100px) {
          .jobs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .jobs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default MyJobs;
