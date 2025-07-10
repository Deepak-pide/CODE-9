import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Example Node server
import express from "express";
const server = express();
server.get("/", (req, res) => res.send("Hello Firebase!"));
server.listen(3000);
