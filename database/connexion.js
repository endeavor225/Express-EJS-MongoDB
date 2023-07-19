const mongoose = require('mongoose');

exports.dbConnect = () => {
    mongoose.connect('mongodb://root:admin@localhost/resto?authSource=admin&useUnifiedTopology=true',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
};