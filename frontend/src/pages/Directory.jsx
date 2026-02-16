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
      
      {/* HERO */}
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

      {/* GRID */}
      <div className="grid">
        {filtered.map((b) => (
          <div key={b.id} className="card">

            {/* IMAGE FIRST */}
            {b.business_image_url && (
              <div className="imgWrap">
                <img
                  src={b.business_image_url}
                  alt={b.business_name}
                  className="img"
                />
              </div>
            )}

            {/* NAME + CATEGORY */}
            <div className="cardTop">
              <h3 className="title">{b.business_name}</h3>
              <span className="badge">{b.category}</span>
            </div>

            {/* DETAILS */}
            <div className="info">
              <p><strong>City:</strong> {b.city}</p>
              <p><strong>State:</strong> {b.state}</p>
              <p><strong>Mobile:</strong> {b.mobile}</p>
            </div>

            {/* VISIT WEBSITE */}
            {b.website && (
              <a
                href={
                  b.website.startsWith("http")
                    ? b.website
                    : `https://${b.website}`
                }
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

        .hero {
          background: linear-gradient(135deg, #0f9d58, #0c7c46);
          color: white;
          padding:70px 30px 70px 80px ;
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
          gap: 20px;
        }

        /* CARD */
        .card {
          background: white;
          border-radius: 14px;
          padding: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          border: 1px solid #eef2f7;
          display: flex;
          flex-direction: column;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        /* IMAGE */
        .imgWrap {
          width: 100%;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 12px;
          background: #f9fafb;
        }

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* TOP SECTION */
        .cardTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .title {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }

        .badge {
          font-size: 11px;
          background: #e0f2fe;
          color: #0284c7;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .info p {
          font-size: 13px;
          margin: 4px 0;
          color: #333;
        }

        .visit-btn {
          margin-top: auto;
          background: linear-gradient(135deg, #ff6b6b, #ff4b4b);
          color: white;
          text-align: center;
          padding: 10px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: 0.3s;
        }

        .visit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0,0,0,0.15);
        }

      `}</style>
    </div>
  );
};

export default Directory;
