document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };

  try {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      localStorage.setItem("token", result.token);
      alert("Connexion réussie !");
      window.location.href = "dashboard.html";
    } else {
      alert(result.message);
    }
  } catch (err) {
    alert("Erreur de connexion");
  }
});
