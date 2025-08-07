# 🔐 Authentification Sécurisée - Node.js + MongoDB + Front HTML

Ce projet est une API complète d’authentification avec une interface frontend minimaliste en HTML/CSS/JavaScript (vanilla). Il permet :

- L’enregistrement d’utilisateurs
- La gestion des rôles (user/admin)
- La connexion (login)
- La réinitialisation du mot de passe via email
- Une structure claire en MVC
- La sécurisation via `dotenv`, `helmet`, `cors`, et `jsonwebtoken`

---

## 📁 Structure du projet

```
auth-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── 
│   ├── routes/
│   │   └── authRoutes.js
│   ├── utils/
│   │   └── token.js
│   ├── .env
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── register.html
│   ├── dashboard.html
│   ├── forgot-password.html
│   ├── login.html
│   ├── reset-password.html
├── ├── js/
│   │   └──script.js
├── ├── css/
│   │   └──styles.css
├── .gitignore
├── README.md
└── package.json
```

---

## 🛠️ Installation & Lancement

### 🔧 Prérequis
- Node.js
- MongoDB Atlas (ou MongoDB local)
- Un compte GitHub
- Postman ou un navigateur pour les tests frontend

### 📦 Installation

```bash
git clone https://github.com/ibrahim-dalein1003/projetWithOusmane.git
cd auth-app/backend
npm install
```

### ⚙️ Fichier `.env`

Crée un fichier `.env` dans le dossier `backend/` :

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/authDB?retryWrites=true&w=majority
PORT=3000
JWT_SECRET=SecuDepJ5
JWT_EXPIRES_IN=1d
```

---

## ▶️ Lancement

### En mode développement :

```bash
npm run dev
```

### En mode production :

```bash
npm start
```

Ouvre ensuite le fichier `frontend/index.html` dans ton navigateur pour tester.

---

## 🧪 Routes principales

| Méthode | URL                         | Description                  |
|--------:|-----------------------------|------------------------------|
| `POST`  | `/api/auth/register`        | Enregistrement               |
| `POST`  | `/api/auth/login`           | Connexion                    |
| `POST`  | `/api/auth/forgot-password` | Envoi lien de réinitialisation |
| `POST`  | `/api/auth/reset-password`  | Réinitialisation du mot de passe |

---

## 🔐 Sécurité intégrée

- ✅ `helmet` : sécurisation des headers HTTP
- ✅ `cors` : contrôle des accès cross-origin
- ✅ `dotenv` : gestion des variables sensibles
- ✅ `bcryptjs` : hachage des mots de passe
- ✅ `jsonwebtoken` : authentification via JWT
- ✅ Middleware d’erreurs et d’accès protégés

---

## 🌐 Déploiement

Tu peux déployer :
- Le backend sur [Render](https://render.com/) ou [Railway](https://railway.app/)
- La base MongoDB sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Le frontend sur [Netlify](https://netlify.app/) ou [Vercel](https://vercel.com/)

---

## 🧑‍💻 Auteur

> Projet réalisé par **Ibrahima Dalein Diallo et Ousmane Keita**  
> 🐙 GitHub : [@ibrahim-dalein1003](https://github.com/ibrahim-dalein1003)  
> 📅 Date : Août 2025

---

## ☕ Contribuer

Les contributions sont les bienvenues ! Forkez, testez, proposez !

---

## 📝 Licence

Ce projet est open source — utilise-le librement selon tes besoins.