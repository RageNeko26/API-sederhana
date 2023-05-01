// Improving syntax
import express from 'express';

/* Should not use "var" to declare a variable */
const router = express.router(); 

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;

export default router;