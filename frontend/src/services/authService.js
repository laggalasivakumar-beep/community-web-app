import supabase from "../config/supabaseClient";

/* ================= REGISTER ================= */
export const registerUser = async (formData) => {
  const { error } = await supabase.from("users_pending").insert([
    {
      username: formData.username,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company_name: formData.companyName,
      category: formData.category,
      company_address: formData.companyAddress,
      password: formData.password,
    },
  ]);

  if (error) {
    console.error(error);
    alert("Registration failed");
    return;
  }

  alert("Registration submitted. Waiting for admin approval.");
};

export const loginUser = async (username, password) => {
  const { data, error } = await supabase
    .from("users_active")
    .select("*")
    .eq("username", username.trim())
    .maybeSingle();

  if (error) {
    console.error(error);
    alert("Server error");
    return null;
  }

  if (!data) {
    alert("Your account is waiting for admin approval.");
    return null;
  }

  if (data.password !== password) {
    alert("Invalid password");
    return null;
  }

  localStorage.setItem("loggedUser", JSON.stringify(data));
  return data;
};



