import { useState } from "react";
import { supabase } from "../supabaseClient"; // adjust path if needed

const categories = {
  "Food & Beverage": [
    "Restaurants",
    "Cafes & Coffee Shops",
    "Food Trucks",
    "Bakeries",
    "Catering Services",
    "Bars & Pubs",
    "BBQ & Smokehouses"
  ],
  "Real Estate & Property": [
    "Real Estate Agents",
    "Property Developers",
    "Property Management",
    "Rental Services"
  ],
  "IT, Tech & Digital Services": [
    "Web Design & Development",
    "Digital Marketing",
    "Software Companies",
    "SEO Services"
  ]
};

const MyDirectory = () => {
  const [form, setForm] = useState({
    business_name: "",
    category: "",
    sub_category: "",
    year_established: "",
    business_type: "",
    owner_name: "",
    mobile: "",
    email: "",
    website: "",
    address: "",
    city: "",
    state: "Texas",
    zip: "",
    description: "",
    services: "",
    price_range: "",
    working_days: [],
    open_time: "",
    close_time: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    experience: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggleDay = (day) => {
    setForm((prev) => ({
      ...prev,
      working_days: prev.working_days.includes(day)
        ? prev.working_days.filter((d) => d !== day)
        : [...prev.working_days, day]
    }));
  };

const submitForm = async () => {
  const { data: userData } = await supabase.auth.getUser();

  const { error } = await supabase.from("directory_listings").insert({
    user_id: userData?.user?.id || null,
    ...form,
    status: "pending"
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Business submitted for admin approval!");
  }
};



  return (
    <div className="directory-container">
      <h2>Texas Business Directory</h2>
      <p className="subtitle">Register your business professionally</p>

      {/* BASIC INFO */}
      <div className="card">
        <h3>Basic Business Information</h3>
        <input name="business_name" placeholder="Business Name" onChange={handleChange} />

        <select name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          {Object.keys(categories).map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select name="sub_category" onChange={handleChange}>
          <option value="">Select Sub-Category</option>
          {categories[form.category]?.map(sub => (
            <option key={sub}>{sub}</option>
          ))}
        </select>

        <input name="year_established" placeholder="Year of Establishment" onChange={handleChange} />

        <select name="business_type" onChange={handleChange}>
          <option value="">Business Type</option>
          <option>LLC</option>
          <option>Sole Proprietorship</option>
          <option>Partnership</option>
          <option>Corporation</option>
        </select>
      </div>

      {/* CONTACT */}
      <div className="card">
        <h3>Contact Details</h3>
        <input name="owner_name" placeholder="Owner Name" onChange={handleChange} />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        <input name="email" placeholder="Email Address" onChange={handleChange} />
        <input name="website" placeholder="Website URL" onChange={handleChange} />
      </div>

      {/* LOCATION */}
      <div className="card">
        <h3>Location</h3>
        <textarea name="address" placeholder="Street Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input value="Texas" disabled />
        <input name="zip" placeholder="ZIP Code" onChange={handleChange} />
      </div>


      {/* DESCRIPTION */}
      <div className="card">
        <h3>Business Description</h3>
        <textarea
          rows="5"
          name="description"
          placeholder="Describe your services, experience & USP"
          onChange={handleChange}
        />
      </div>

      {/* SERVICES */}
      <div className="card">
        <h3>Services & Pricing</h3>
        <input name="services" placeholder="Main Services" onChange={handleChange} />

        <select name="price_range" onChange={handleChange}>
          <option value="">Price Range</option>
          <option>$</option>
          <option>$$</option>
          <option>$$$</option>
        </select>
      </div>

      {/* TIMINGS */}
      <div className="card">
        <h3>Business Timings</h3>
        <div className="days">
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
            <label key={day}>
              <input type="checkbox" onChange={() => toggleDay(day)} /> {day}
            </label>
          ))}
        </div>
        <input type="time" name="open_time" onChange={handleChange} />
        <input type="time" name="close_time" onChange={handleChange} />
      </div>

      {/* SOCIAL */}
      <div className="card">
        <h3>Social Media</h3>
        <input name="facebook" placeholder="Facebook URL" onChange={handleChange} />
        <input name="instagram" placeholder="Instagram URL" onChange={handleChange} />
        <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
      </div>
      <button className="submit-btn" onClick={submitForm}>
        Submit Business Listing
      </button>

      {/* CSS */}
      <style>{`
        .directory-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
        }

        h2 {
          font-size: 28px;
        }

        .subtitle {
          color: #555;
          margin-bottom: 25px;
        }

        .card {
          background: #fff;
          padding: 25px;
          margin-bottom: 25px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
        }

        .card h3 {
          margin-bottom: 15px;
          font-size: 18px;
          color: #1f2937;
        }

        input, textarea, select {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          font-size: 14px;
        }

        textarea {
          resize: none;
        }

        .days {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 15px;
        }

        .declaration {
          font-size: 14px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default MyDirectory;
