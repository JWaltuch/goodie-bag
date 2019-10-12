const router = require('express').Router();
const { Candy } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allCandies = await Candy.findAll();
    res.json(allCandies);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const aCandy = await Candy.findById(req.params.id);
    if (!aCandy) {
      next();
    } else {
      res.json(aCandy);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:id/increase', async (req, res, next) => {
  try {
    const candyInstance = await Candy.findById(req.params.id);
    const [, updatedCandy] = await Candy.update(
      { quantity: candyInstance.quantity + 1 },
      { where: { id: req.params.id }, returning: true, plain: true }
    );
    //FIX THE HARD CODING
    res.json(updatedCandy);
  } catch (error) {
    next(error);
  }
});

router.put('/:id/decrease', async (req, res, next) => {
  try {
    const candyInstance = await Candy.findById(req.params.id);
    const [, updatedCandy] = await Candy.update(
      { quantity: candyInstance.quantity - 1 },
      { where: { id: req.params.id }, returning: true, plain: true }
    );
    res.json(updatedCandy);
  } catch (error) {
    next(error);
  }
});

router.use('/', (req, res, next) => {
  res.send(`<h1><center>No candy exists with that ID :(<center><h1>`);
});

router.use((error, req, res, next) => {
  console.log(error);
  res.send('error');
});

module.exports = router;
