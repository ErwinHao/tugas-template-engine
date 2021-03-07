const router = require('express').Router();
const homeRoutes = require('./home/homeRoutes');

router.use('/home', homeRoutes);

module.exports = router;