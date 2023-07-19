const {Router} = require('express')
const plats = require('../utils/plats')
const Critiques = require('../model/Critiques')

const router = Router()

router.get('/', async (req, res) => {
    const critiques = await Critiques.find().sort("-date")
    const templateData = {
        title: "Page d'accueil",
        styles: ["accueil.css"],
        plats: plats,
        critiques: critiques
    }
    res.render('accueil', templateData)
})

router.post('/', async (req, res) => {
    const { plat } = req.body
    let critiques;
    if(plat) critiques = await Critiques.find({ plat})
    else critiques = await Critiques.find()

    const templateData = {
        title: "Page d'accueil",
        styles: ["accueil.css"],
        plats: plats,
        critiques: critiques
    }
    res.render('accueil', templateData)
})

router.get('/ajouter', (req, res) => {
    const templateData = {
        title: "Page de critique",
        styles: ["ajouter-critique.css"],
        plats: plats
    }
    res.render('ajouter-critique', templateData)
})

router.post('/ajouter', async (req, res) => {
    try {
        await new Critiques({...req.body}).save()
        res.redirect("/")
    } catch (error) {
        console.log("error", error);
        res.status(405)
    }
})

module.exports = router
