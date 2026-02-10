import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [form, setForm] = useState({});
  const [preview, setPreview] = useState(user?.profile_pic || "");

  useEffect(() => {
    setForm(user);
  }, []);

  const saveProfile = async () => {
    await supabase
      .from("users_active")
      .update(form)
      .eq("id", user.id);

    alert("Profile updated");
    localStorage.setItem("loggedUser", JSON.stringify(form));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);

    setForm({ ...form, profile_pic: imageUrl });
  };

  const removeImage = () => {
    setPreview("");
    setForm({ ...form, profile_pic: "" });
  };

  return (
    <>
      <div className="dashboard-container">
        <h2 className="dashboard-title">My Profile</h2>

        {/* PROFILE CARD */}
        <div className="profile-card">
          {/* PROFILE IMAGE */}
          <div className="profile-image-section">
            <div className="image-wrapper">
              {preview ? (
                <img src={preview} alt="Profile" />
              ) : (
                <div className="placeholder">No Image</div>
              )}
            </div>

            <label className="upload-btn">
              Upload Photo
              <input type="file" accept="image/*" hidden onChange={handleImageChange} />
            </label>

            {preview && (
              <button className="remove-btn" onClick={removeImage}>
                Remove
              </button>
            )}
          </div>

          {/* PROFILE FORM */}
          <div className="profile-form">
            <input
              placeholder="Full Name"
              value={form.full_name || ""}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            />

            <input
              placeholder="Email"
              value={form.email || ""}
              disabled
            />

            <input
              placeholder="Phone Number"
              value={form.phone || ""}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              placeholder="Company Name"
              value={form.company_name || ""}
              onChange={(e) =>
                setForm({ ...form, company_name: e.target.value })
              }
            />

            <textarea
              placeholder="Company Address"
              value={form.company_address || ""}
              onChange={(e) =>
                setForm({ ...form, company_address: e.target.value })
              }
            />

            <button className="save-btn" onClick={saveProfile}>
              Save Profile
            </button>
          </div>
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .dashboard-container {
          max-width: 1100px;
          margin: 40px auto;
          padding: 20px;
        }

        .dashboard-title {
          margin-bottom: 25px;
          font-size: 26px;
          font-weight: 600;
        }

        .profile-card {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          background: #fff;
          padding: 35px;
          border-radius: 16px;
          border: 0.1px solid;
          border-color: blue;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        /* IMAGE SECTION */
        .profile-image-section {
          text-align: center;
        }

        .image-wrapper {
          width: 160px;
          height: 160px;
          margin: auto;
          border-radius: 50%;
          overflow: hidden;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .placeholder {
          font-size: 14px;
          color: #777;
        }

        .upload-btn {
          display: inline-block;
          margin-top: 15px;
          padding: 8px 18px;
          background: #2563eb;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }

        .remove-btn {
          display: block;
          margin: 10px auto 0;
          background: transparent;
          color: #dc2626;
          border: none;
          cursor: pointer;
          font-size: 13px;
        }

        /* FORM */
        .profile-form input,
        .profile-form textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 14px;
        }

        .profile-form textarea {
          resize: none;
          height: 90px;
        }

        .profile-form input:disabled {
          background: #f3f4f6;
          cursor: not-allowed;
        }

        .save-btn {
          width: 100%;
          padding: 14px;
          background: #16a34a;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .save-btn:hover {
          background: #15803d;
        }

        @media (max-width: 768px) {
          .profile-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Profile;
