import React, { useState, useEffect } from "react";
import {
  listStudent,
  deleteStudent as deleteStudentAPI,
} from "../services/StudentService";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    listStudent()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addStudents() {
    navigate("/add-students");
  }

  function updateStudent(rollNo) {
    navigate(`/update/${rollNo}`);
  }

  function deleteStudent(rollNo) {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudentAPI(rollNo)
        .then((response) => {
          // Update the list by removing the deleted student
          setStudents(students.filter((student) => student.rollNo !== rollNo));
        })
        .catch((error) => {
          console.error("Error deleting student:", error);
        });
    }
  }

  return (
    <div className="container">
      <h4 className="text-center">List of Students</h4>
      <button
        type="button"
        className="btn btn-primary"
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={addStudents}
      >
        Add Students
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Branch</th>
            <th>Name</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.branch}</td>
              <td>{student.name}</td>
              <td>{student.percentage}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateStudent(student.rollNo)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStudent(student.rollNo)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
