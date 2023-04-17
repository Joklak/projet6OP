const isValide = require('mongoose-validator');

exports.nameValidator = [
  isValide({
    validator: 'isLength',
    arguments: [4, 20],
    message: 'Le nom de la sauce doit contenir entre 4 et 20 caractère ',
  }),


  isValide({
    validator: 'matches',
    arguments: /^[a-z\d\-_\s]+$/i,
    message: "Le nom de la sauce ne peut contenir que des chiffres et des lettres",
  }),
];

exports.manufacturerValidator = [
  isValide({
    validator: 'isLength',
    arguments: [4, 20],
    message: 'Le nom du fabricant doit contenir entre 3 et 20 caractères',
  }),
  isValide({
    validator: 'matches',
    arguments: /^[a-z\d\-_\s]+$/i,
    message: "Le nom du fabriquant ne peut contenir que des chiffres et des lettres",
  }),
];

exports.descriptionValidator = [
  isValide({
    validator: 'isLength',
    arguments: [10, 200],
    message: 'La description de la sauce doit contenir entre 10 et 200 caractères',
  }),
  isValide({
    validator: 'matches',
    arguments: /^[a-z\d\-_\s]+$/i,
    message: "La description ne peut contenir que des chiffres et des lettres",
  }),
];

exports.pepperValidator = [
  isValide({
    validator: 'isLength',
    arguments: [4, 20],
    message: 'Le pepper doit contenir entre 4 et 20 caractères',
  }),
  isValide({
    validator: 'matches',
    arguments: /^[a-z\d\-_\s]+$/i,
    message: "L'ingrédient principal ne peut contenir que des chiffres et des lettres",
  }),
];