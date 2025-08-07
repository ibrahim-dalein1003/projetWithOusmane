const API_BASE_URL = window.location.hostname === 'localhost'
  ? "http://localhost:3000/api/auth"                      // En local
  : "https://projet-backend-m9r8.onrender.com/api/auth";    // En production (Render)
