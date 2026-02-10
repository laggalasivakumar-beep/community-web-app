import supabase from "../config/supabaseClient";

export const approveUser = async (user) => {
  // 1️⃣ Insert into active users
  const { data, error } = await supabase.from("users_active").insert([
    {
      username: user.username,
      name: user.name,
      email: user.email,
      phone: user.phone,
      company_name: user.companyName,        // map properly
      category: user.category,
      company_address: user.companyAddress,  // map properly
      password: user.password,
    },
  ]);

  if (error) {
    console.log("Failed to insert into active users:", error);
    alert("Insert failed: " + error.message);
    return;
  }

  // 2️⃣ Mark pending as approved
  const { error: pendingError } = await supabase
    .from("users_pending")
    .update({ approved: true })
    .eq("id", user.id);

  if (pendingError) {
    console.log("Failed to update pending user:", pendingError);
    return;
  }

  alert("User approved successfully!");
};
