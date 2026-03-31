import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBozaQ5G_wbotbyaxYBXDavtiszpWaE1Jk",
  authDomain: "hungry-nomad-c5434.firebaseapp.com",
  projectId: "hungry-nomad-c5434",
  storageBucket: "hungry-nomad-c5434.firebasestorage.app",
  messagingSenderId: "894196017214",
  appId: "1:894196017214:web:bcee5fd455ba52544ac96f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
