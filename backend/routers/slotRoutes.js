const express = require('express');
const slotControllers = require('../controllers/slotControllers');
const router = express.Router();

router
    .route('/')
    .get(slotControllers.getALlSlot)
    .post(slotControllers.createSlot)
    .put(slotControllers.updateSlot)
    .delete(slotControllers.deleteSlot);;

router
    .route('/:id')
    .get(slotControllers.getSingleSlot)
    .put(slotControllers.updateSlot)
    .delete(slotControllers.deleteSlot);

module.exports = router;
