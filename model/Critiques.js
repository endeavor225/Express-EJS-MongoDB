const {Schema, model} = require('mongoose');

const critiqueSchema = new Schema({
  nom: { type: String, required: true },
  plat: { type: String, required: true },
  critique: { type: String, required: true },
  date: { type: Date, default: Date.now},
});

module.exports = model('critique', critiqueSchema);