import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Classifieds = () => {
  const nav = useNavigate();

  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);

  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");

  const fetchApproved = async () => {
    setLoading(true);
    try {
      const nowIso = new Date().toISOString();

      let query = supabase
        .from("classifieds")
        .select("*")
        .eq("status", "approved")
        .gt("expires_at", nowIso)
        .order("created_at", { ascending: false });

      const { data, error } = await query;
      if (error) throw error;

      setAds(data || []);
    } catch (e) {
      console.error(e);
      alert(e.message || "Failed to load listings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApproved();
  }, []);

  const categories = useMemo(() => {
    const set = new Set(ads.map((a) => a.category).filter(Boolean));
    return ["all", ...Array.from(set)];
  }, [ads]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();

    return ads.filter((a) => {
      const matchTerm =
        !term ||
        (a.title || "").toLowerCase().includes(term) ||
        (a.description || "").toLowerCase().includes(term) ||
        (a.city || "").toLowerCase().includes(term);

      const matchCat = category === "all" || a.category === category;
      return matchTerm && matchCat;
    });
  }, [ads, q, category]);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <h1>Community Classifieds</h1>
          <p>Post your ad in minutes. Listings go live after admin approval.</p>

          <div className="heroBtns">
            <button className="btnPrimary" onClick={() => nav("/my-classifieds")}>
              Post a Classified
            </button>
            <button className="btnGhost" onClick={() => document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" })}>
              Browse Listings
            </button>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className="wrap" id="listings">
        <div className="topRow">
          <h2>Approved Listings</h2>

          <div className="controls">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search title, city, description..."
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All Categories" : c}
                </option>
              ))}
            </select>

            <button className="btnSmall" onClick={fetchApproved} disabled={loading}>
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>

        {loading && <p className="muted">Loading listings...</p>}

        {!loading && filtered.length === 0 && (
          <div className="empty">
            <h3>No approved listings yet</h3>
            <p>Once admin approves ads, they will appear here automatically.</p>
          </div>
        )}

        <div className="grid">
          {filtered.map((ad) => (
            <div className="card" key={ad.id}>
              <div className="cardTop">
                <div className="title">{ad.title}</div>
                <div className="price">{ad.price ? `$${ad.price}` : "NA"}</div>
              </div>

              <div className="meta">
                <span className="tag">{ad.category}</span>
                <span className="tag">{ad.sub_category}</span>
                <span className="tag mutedTag">
                  {ad.city} • {ad.zip_code}
                </span>
              </div>

              <div className="desc">{ad.description}</div>

              <div className="footer">
                <div className="small">
                  Contact: <b>{ad.contact_name}</b> • {ad.contact_phone}
                </div>

                {/* Optional: show youtube link if video */}
                {ad.media_type === "video" && ad.youtube_url ? (
                  <a className="link" href={ad.youtube_url} target="_blank" rel="noreferrer">
                    Watch Video
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .hero{
          padding: 90px 20px;
          background: linear-gradient(135deg,#111827,#2563eb);
          color: #fff;
        }
        .heroInner{
          max-width: 1000px;
          margin: 0 auto;
        }
        .hero h1{
          margin: 0;
          font-size: 44px;
          letter-spacing: -0.5px;
        }
        .hero p{
          margin: 10px 0 0 0;
          opacity: 0.95;
          font-size: 16px;
        }
        .heroBtns{
          margin-top: 22px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btnPrimary{
          border: none;
          padding: 12px 18px;
          border-radius: 12px;
          background: #fff;
          color: #111827;
          font-weight: 900;
          cursor: pointer;
        }
        .btnGhost{
          border: 2px solid rgba(255,255,255,0.9);
          padding: 12px 18px;
          border-radius: 12px;
          background: transparent;
          color: #fff;
          font-weight: 900;
          cursor: pointer;
        }

        .wrap{
          padding: 22px;
          background: #f4f6f9;
          min-height: 60vh;
        }
        .topRow{
          max-width: 1100px;
          margin: 0 auto 12px auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .topRow h2{
          margin: 0;
          color: #111827;
        }
        .controls{
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }
        .controls input, .controls select{
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          background: #fff;
          outline: none;
          min-width: 220px;
        }
        .btnSmall{
          border: none;
          padding: 10px 12px;
          border-radius: 12px;
          background: #111827;
          color: #fff;
          font-weight: 900;
          cursor: pointer;
        }
        .btnSmall:disabled{ opacity: 0.6; cursor: not-allowed; }

        .grid{
          max-width: 1100px;
          margin: 14px auto 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 12px;
        }
        .card{
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 14px;
          box-shadow: 0 10px 26px rgba(0,0,0,0.06);
        }
        .cardTop{
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: baseline;
        }
        .title{ font-weight: 900; color: #111827; }
        .price{ font-weight: 900; color: #111827; }
        .meta{
          margin-top: 8px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tag{
          font-size: 11px;
          padding: 5px 8px;
          border-radius: 999px;
          background: #f3f4f6;
          color: #111827;
          font-weight: 900;
        }
        .mutedTag{
          background: #eef2ff;
          color: #3730a3;
        }
        .desc{
          margin-top: 10px;
          font-size: 13px;
          color: #374151;
          line-height: 1.5;
          min-height: 58px;
          white-space: pre-wrap;
        }
        .footer{
          margin-top: 12px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
        }
        .small{ font-size: 12px; color: #374151; }
        .link{
          font-size: 12px;
          font-weight: 900;
          color: #2563eb;
          text-decoration: none;
        }
        .muted{ color: #6b7280; }

        .empty{
          max-width: 1100px;
          margin: 18px auto;
          padding: 24px;
          border: 1px dashed #cbd5e1;
          background: #fff;
          border-radius: 14px;
          text-align: center;
          color: #6b7280;
        }

        @media (max-width: 560px){
          .controls input, .controls select{ min-width: 100%; }
          .hero h1{ font-size: 34px; }
        }
      `}</style>
    </>
  );
};

export default Classifieds;
