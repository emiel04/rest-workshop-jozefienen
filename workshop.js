import express from "express";
import {
  removeFromArrayByIndex,
  removeFromArrayByValue,
  logger,
} from "./helper.js";

const app = express();
app.use(express.json());
app.use(logger);

/* -------------------------------------------------------------------- */

const myName = {
  name: "",
};


const profile = { name: "", age: null }; 

// Oefening 1: Geef je Eigen Naam Terug (GET)
app.get("/name", (req, res) => {
  // code hier
});

// Oefening 2: Geef een Lijst van Namen Terug (GET)
app.get("/names", (req, res) => {
  // code hier
});

// Oefening 3: Voeg je Eigen Naam Toe aan de Lijst (POST)
app.post("/names", (req, res) => {
  // code hier
});

// Oefening 4: Verwijder een Naam uit de Lijst (DELETE)
app.delete("/names/:name", (req, res) => {
  // code hier
});

// Oefening 5: Bewaar je Eigen Informatie (POST)
app.post("/profile", (req, res) => {
  // code hier
});

// Oefening 6: Haal je Eigen Informatie Op (GET)
app.get("/profile", (req, res) => {
  // code hier
});

// Oefening 7: Update je Eigen Informatie (PUT)
app.put("/profile", (req, res) => {
  // code hier
});

// Oefening 8: Verwijder je Eigen Informatie (DELETE)
app.delete("/profile", (req, res) => {
  // code hier
});

/* -------------------------------------------------------------------- */

app.get("/", (req, res => {
  res.send("Welkom! Het is nu " + new Date().toLocaleTimeString('nl-NL', { timeZone: 'Europe/Brussels' }));
}))

app.listen(3000, () => {
  console.log("Express server initialized on port 3000");
});

