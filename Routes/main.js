const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Views/Homepage.html'));
});

router.get('/Contactus', (req, res) => {
    res.sendFile(path.join(__dirname, '../Views/Contactus.html'));
});

router.get('/OurServices', (req, res) => {
    res.sendFile(path.join(__dirname, '../Views/OurServices.html')); 
});

module.exports = router;
