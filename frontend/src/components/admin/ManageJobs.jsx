import { useEffect, useState } from "react";


const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => { fetchJobs(); }, []);

  const fetchJobs = async () => {
    const { data } = await supabase.from("jobs").select("*").eq("status", "pending");
    setJobs(data || []);
  };

  const updateStatus = async (id, status) => {
    await supabase.from("jobs").update({ status }).eq("id", id);
    fetchJobs();
  };

  return (
    <div style={box}>
      <h2>Pending Jobs</h2>
      {jobs.map(job => (
        <div key={job.id} style={item}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <button onClick={() => updateStatus(job.id, "approved")}>Approve</button>
          <button onClick={() => updateStatus(job.id, "rejected")}>Reject</button>
        </div>
      ))}
    </div>
  );
};

const box = { border: "1px solid #ccc", padding: 15, marginBottom: 20 };
const item = { borderBottom: "1px solid #eee", padding: 10 };

export default ManageJobs;
