import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const ManageDirectory = () => {
  const [businesses, setBusinesses] = useState([]);

  const fetchData = async () => {
    const { data } = await supabase
      .from("directory_listings")
      .select("*")
      .order("created_at", { ascending: false });

    setBusinesses(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id, status) => {
    await supabase.from("directory_listings").update({ status }).eq("id", id);
    fetchData();
  };

  return (
    <div>
      <h2>Directory Approvals</h2>

      {businesses.map(b => (
        <div key={b.id} style={card}>
          <h3>{b.business_name}</h3>
          <p>{b.category} → {b.sub_category}</p>
          <p>Owner: {b.owner_name}</p>
          <p>City: {b.city}</p>

          <span style={badge(b.status)}>{b.status}</span>

          <div style={{ marginTop: 10 }}>
            <button onClick={() => updateStatus(b.id, "approved")} style={approveBtn}>Approve</button>
            <button onClick={() => updateStatus(b.id, "rejected")} style={rejectBtn}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const card = { background: "#fff", padding: 15, borderRadius: 10, marginBottom: 15, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" };
const approveBtn = { background: "green", color: "#fff", padding: "6px 12px", marginRight: 8 };
const rejectBtn = { background: "red", color: "#fff", padding: "6px 12px" };
const badge = s => ({ background: s === "approved" ? "green" : s === "pending" ? "orange" : "red", color: "#fff", padding: "4px 8px", borderRadius: 6 });

export default ManageDirectory;
