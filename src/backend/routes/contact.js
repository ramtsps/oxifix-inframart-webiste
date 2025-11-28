const express = require('express');
const { handleContact } = require('../controllers/contactController');
const { verifyToken } = require('../middleware/auth');
const { validateContactForm } = require('../middleware/validation');

const router = express.Router();

// Apply middleware
router.use(verifyToken);
router.use(validateContactForm);

// Contact form endpoint
router.post('/', handleContact);

module.exports = router;