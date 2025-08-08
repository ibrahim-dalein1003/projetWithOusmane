document.getElementById("forgot-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target.email.value;

  try {
    const res = await fetch(`${API_BASE_URL}/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await res.json();
    if(res.ok) return window.location.href = "reset-password.html";
    alert(result.message || "Si cet email existe, un lien vous a été envoyé");
  } catch (err) {
    alert("Erreur lors de la demande");
  }
});
