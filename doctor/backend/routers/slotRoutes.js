const express = require('express');
const slotControllers = require('../controllers/slotControllers');
const router = express.Router();

router
    .route('/')
    .get(slotControllers.getALlSlot)
    .post(slotControllers.createSlot);

module.exports = router;