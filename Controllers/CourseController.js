const Course = require("../models/coursemodel");

exports.addCourse = async (req, res) => {
  try {

    const courseData = req.body;
    console.log('comed here');

    console.log(courseData);
    const newCourse = new Course(courseData);
    await newCourse.save();

    res.status(201).json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
