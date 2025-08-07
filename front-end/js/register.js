document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nom: e.target.name.value,
    prenom: e.target.prenom.value,
    email: e.target.email.value,
    role: e.target.role.value,
    password: e.target.password.value
  };

  try {
    const res = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message || "Inscription réussie !");
    console.log("Inscription réussie")
  } catch (err) {
    alert("Erreur lors de l'inscription");
  }
});
