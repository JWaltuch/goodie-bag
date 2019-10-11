const router = require('express').Router();
const { Candy } = require('../db/index');

router.use('/:id', async (req, res, next) => {
  try {
    const aCandy = await Candy.findById(req.params.id);
    res.json(aCandy);
  } catch (error) {
    next(error);
  }
});

router.use('/', async (req, res, next) => {
  try {
    const allCandies = await Candy.findAll();
    res.json(allCandies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
