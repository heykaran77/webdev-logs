import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore(
    (state) => state.toggleCourseStatus
  );
  return (
    <>
      {courses.map((course, idx) => (
        <div
          key={idx}
          style={{
            marginTop: "1rem",
            borderRadius: "8px",
            width: "100%",
            padding: "1rem 2rem",
            backgroundColor: "#2d2d2d",
            display: "flex",
            gap: "2rem",
            color: "#fff",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <input
            type="checkbox"
            checked={course.completed}
            onChange={() => {
              toggleCourseStatus(course.id);
            }}
          />
          <h3>{course?.title}</h3>
          <button
            onClick={() => {
              removeCourse(course.id);
            }}
            style={{
              backgroundColor: "crimson",
              color: "#fff",
              width: "6rem",
              height: "2rem",
              border: "none",
              cursor: "pointer",
              borderRadius: "8px",
            }}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default CourseList;
