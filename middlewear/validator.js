const { body, validationResult } = require("express-validator");

exports.registerValidator = [
  body("nomprenom", "Saisissez votre nom et prénom SVP!").isLength({
    min: 1,
  }),
  body(
    "nomprenom",
    "Votre Nom et Prénom doit contenir au moins 7 caractères SVP!"
  ).isLength({ min: 7 }),
  body("email", "Saisissez votre adresse mail SVP!").isLength({
    min: 1,
  }),
  body("email", "Saisissez une adresse mail valide SVP!").isEmail(),
  body("pass", "Saisissez votre mdp SVP!").isLength({
    min: 1,
  }),
  body("pass", "Votre mdp doit contenir au moins 6 caractères").isLength({
    min: 6,
  }),
];

exports.loginValidator = [
  body("nomprenom", "Saisissez votre nom et prénom SVP!").isLength({
    min: 1,
  }),
  body(
    "nomprenom",
    "Votre Nom et Prénom doit contenir au moins 7 caractères SVP!"
  ).isLength({ min: 7 }),
  body("email", "Saisissez votre adresse mail SVP!").isLength({
    min: 1,
  }),
  body("email", "Saisissez une adresse mail valide SVP!").isEmail(),
  body("pass", "Saisissez votre mdp SVP!").isLength({
    min: 1,
  }),
  body("pass", "Votre mdp doit contenir au moins 6 caractères").isLength({
    min: 6,
  }),
];

exports.Validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};
