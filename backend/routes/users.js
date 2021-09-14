const router = require('express').Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({
    nome: "Lucas",
    idade: 20,
    curso: "BCC"
  });
});

module.exports = router;
