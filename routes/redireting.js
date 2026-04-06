const express = require('express');
const {redirectingToUrl} = require('../controllers/redirect')
const {liveAnalytics} = require('../controllers/analytics')
const router = express.Router();

// Re directing the url with 
router.get('/:short', redirectingToUrl);
router.post('/:short',liveAnalytics);


module.exports = router;
