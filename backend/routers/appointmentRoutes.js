const express = require('express');
const {
 
    getALlAppointment,
    createAppointment,

} = require('../controllers/appointmentController');
const router = express.Router();
const Auth = require("../middlewares/auth");

router.get("/",Auth.validateToken,getALlAppointment);
router.post('/',createAppointment);

// router
//     .route('/:id')
//     .get(appointmentController.getSingAppointment)
//     .put(appointmentController.updateAppointment)
//     .delete(appointmentController.deleteAppointment);

module.exports = router;

