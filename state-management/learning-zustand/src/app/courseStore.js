import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: courses.filter((course) => course.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: courses.map((course) =>
        course.id === courseId ? { ...course, completed: !completed } : course
      ),
    }));
  },
});

//Creating the store
const useCourse = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);

export default useCourse;
