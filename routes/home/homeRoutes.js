const router = require('express').Router();
const { getHomeView } = require('../../controllers/homeController');

router.get('/view-home', getHomeView);

module.exports = router;