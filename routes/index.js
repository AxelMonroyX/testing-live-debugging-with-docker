var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
let worker = { name: "Axel" };
let data = { hours: 8, days: 5 };
let message = `Hola, ${worker.name}, utiliza DOCKER ${data.hours} horas al día durante ${data.days} días
 a la semana que suman un total ${data.hours * data.days} horas siendo feliz`;

  res.render('index', { title: 'Docker meetup', message: message });
});

module.exports = router;
