import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Directory = () => {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApproved = async () => {
      const { data } = await supabase
        .from("directory_listings")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      setListings(data || []);
    };

    fetchApproved();
  }, []);

  const filtered = listings.filter((b) =>
    b.business_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="directory-page">
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Find Trusted Businesses Near You</h1>
        <p>Explore verified services approved by our admin team</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search business by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

<div className="grid">
  {filtered.map((b) => (
    <div key={b.id} className="card">

      <h3 className="title">{b.business_name}</h3>
      <span className="badge">{b.category}</span>

      <div className="info-row">
        <span className="label">Description:</span>
        <span className="text">{b.description}</span>
      </div>

      <div className="info-row">
        <span className="label">City:</span>
        <span className="text">{b.city}</span>
      </div>

      <div className="info-row">
        <span className="label">State:</span>
        <span className="text">{b.state}</span>
      </div>

      <div className="info-row">
        <span className="label">Mobile:</span>
        <span className="text">{b.mobile}</span>
      </div>

      {/* BUTTON */}
      {b.website && (
        <a
          href={b.website.startsWith("http") ? b.website : `https://${b.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-btn"
        >
          Visit Website
        </a>
      )}

    </div>
  ))}
</div>




      {/* CSS */}
      <style>{`
        .directory-page {
          font-family: 'Segoe UI', sans-serif;
          background: #f4f6f9;
          min-height: 100vh;
        }

        /* HERO */
        .hero {
          background: linear-gradient(135deg, #0f9d58, #0c7c46);
          color: white;
          padding: 60px 8%;
        }

        .hero h1 {
          font-size: 42px;
          font-weight: bold;
        }

        .hero p {
          margin: 10px 0 25px;
          font-size: 16px;
        }

        .search-box input {
          padding: 14px 20px;
          width: 350px;
          border-radius: 30px;
          border: none;
          font-size: 14px;
          outline: none;
        }

        /* GRID */
        .grid {
  padding: 25px 8%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px; /* tighter grid */
}

.card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border-left: 4px solid #ff6b6b;
  display: flex;
  flex-direction: column;
}

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .card-header h3 {
          font-size: 18px;
          color: #111;
        }

        .title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.badge {
  font-size: 11px;
  background: #e0f2fe;
  color: #0284c7;
  padding: 4px 10px;
  border-radius: 20px;
  width: fit-content;
  margin-bottom: 10px;
}

        .desc {
          font-size: 14px;
          color: #555;
          margin: 12px 0;
          min-height: 50px;
        }

        .details {
          font-size: 13px;
          color: #333;
          margin-bottom: 15px;
        }
.info-row {
  display: flex;
  gap: 6px;
  font-size: 13px;
  margin: 3px 0;
}
  .label {
  font-weight: 600;
  color: #333;
  min-width: 85px;
}

.text {
  color: #555;
  flex: 1;
}
        .visit-btn {
  margin-top: 10px;
  background: linear-gradient(135deg, #ff6b6b, #ff4b4b);
  color: white;
  text-align: center;
  padding: 9px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: 0.3s;
}

.visit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.15);
}


        .info p {
  margin: 2px 0; /* removes extra space */
  font-size: 13px;
}

.value {
  color: #444;
  margin-bottom: 6px;
}

.link {
  font-size: 13px;
  color: #0f9d58;
  word-break: break-all;
}

.btn {
  margin-top: 10px;
  background: #ff6b6b;
  color: white;
  padding: 9px;
  text-align: center;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
}
      `}</style>
    </div>
  );
};

export default Directory;
