import { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  const handleSubmit = () => {
    if (!courseTitle) return alert("Please add a course title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
      completed: false,
    });
    setCourseTitle("");
  };
  return (
    <div
      className="form-container"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}>
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        type="text"
        className="form-input"
        placeholder="Course title eg. Zustand series"
      />
      <button onClick={handleSubmit} className="form-submit-btn">
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
