const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/', express.static(path.join(__dirname, '/../public/')));
router.use('/assets/images/', express.static(path.join(__dirname, '/../images/')));
router.use('/assets/css/images/', express.static(path.join(__dirname, '/../images/')));
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../index.html'))
})

module.exports = router;