const express = require('express');
const router = express.Router();

const courseController = require('../Controllers/CourseController');



router.post("/addcourse", courseController.addCourse);
module.exports = router;