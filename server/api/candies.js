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

router.use('/', (req, res, next) => {
  res.send('PAGE NOT FOUND');
});

router.use((error, req, res, next) => {
  console.log(error);
  res.send('error');
});

module.exports = router;
