import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const routing = useNavigate();
  function viewStudents() {
    routing("/students");
  }
  function viewCourses() {
    routing("/courses");
  }
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={viewStudents}
      >
        Students List
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={viewCourses}
      >
        Courses List
      </button>
    </div>
  );
};

export default Home;
