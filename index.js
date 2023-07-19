const express = require("express")
const router = require("./routes/index.js")
const path = require("path")
const { dbConnect } = require("./database/connexion.js")
const app = express()

//Connexion a la base de données
dbConnect()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public"))); // Préciser le dossier des fichiers static

app.set('view engine', 'ejs') // Indiquer le moteur de template à express
app.use(router)

app.listen(3000)