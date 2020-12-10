 const express = require('express');
const router = express.Router();
const storiesController = require('../controllers/stories-controller');
const login = require('../config/login')

router.get('/', storiesController.listStories);
router.post('/', storiesController.createStory);
router.get('/await', storiesController.storiesApprove);
router.put('/', login, storiesController.approveStory);
router.delete('/', login, storiesController.deleteStory);

module.exports = router;
