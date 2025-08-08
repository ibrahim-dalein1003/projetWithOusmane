document.getElementById("reset-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  const nouveauMotDePasse = e.target.password.value;

    if (!token) {
    return alert("Lien invalide ou expiré. Veuillez recommencer la procédure.");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nouveauMotDePasse }),
    });

      if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Erreur ${res.status}: ${errorText}`);
    }

    const result = await res.json();
    alert(result.message || "Mot de passe réinitialisé !");
  } catch (err) {
    alert("Erreur lors de la réinitialisation");
  }
});
