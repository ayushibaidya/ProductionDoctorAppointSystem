const express = require("express");
const {
  loginController,
  registerController,
  authController,
  getAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//Register || POST
router.post("/register", registerController);
module.exports = router;

//Auth || POST
router.post("/getUserData", authMiddleware, authController);
module.exports = router;

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);
module.exports = router;

//Notifiction  Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//Booking Availability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
