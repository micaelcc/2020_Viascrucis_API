const express = require('express');
const router = express.Router();
const bookView = require('../controllers/book-views-controller');

router.get('/', bookView.showViews);
router.put('/', bookView.addView);

module.exports = router;