const express = require("express");

const appointmentRoutes = require("./appointmentRoutes");
const userRoutes = require("./userRoutes");
const slotRoutes = require("./slotRoutes");



const router = express.Router();

//to run in postman http://localhost:4000/api/appointment
// getting data and posting data in db is at same route.

router.use("/appointment", appointmentRoutes);  
router.use("/slot", slotRoutes);
router.use("/user", userRoutes);



module.exports = router;
