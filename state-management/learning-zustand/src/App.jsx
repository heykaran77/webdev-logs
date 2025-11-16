import React from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

const App = () => {
  return (
    <div className="main-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <h1
          style={{
            marginBottom: "2rem",
            fontSize: "2rem",
          }}>
          My Course List
        </h1>
        <CourseForm />
        <CourseList />{" "}
      </div>
    </div>
  );
};

export default App;
