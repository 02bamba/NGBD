const express = require("express");

const cors= require("cors");
const app = express();

const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => console.log('Connecté à la base de données MongoDB'));

const Schema = new mongoose.Schema({
  _id: String,
  type: String,
  title: String,
  pages: Object,
  year: Number,
  booktitle: String,
  url: String,
  authors: [String]
});

const publis = mongoose.model('publis', Schema);

app.get("/", async (req, res) => {
  try {
    const data = await publis.aggregate([
      { $unwind: "$authors" },
      { $group: { _id: "$authors" } },
      { $limit: 50 },
      { $project: { _id: 0, author: "$_id" } }
    ]);
    res.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des auteurs :", error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend express server is running on port ${PORT}.`);
});
