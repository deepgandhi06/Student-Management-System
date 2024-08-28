import React, { useEffect, useState } from "react";
import {
  createStudent,
  getStudent,
  updateStudent,
} from "../services/StudentService";
import { useNavigate, useParams } from "react-router-dom";

const Students = () => {
  const [rollNo, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");

  const navigate = useNavigate();
  const { RollNo } = useParams();

  useEffect(() => {
    if (RollNo) {
      getStudent(RollNo)
        .then((response) => {
          setRollNo(response.data.rollNo || "");
          setBranch(response.data.branch || "");
          setName(response.data.name || "");
          setPercentage(response.data.percentage || "");
        })
        .catch((error) => {
          console.error("Error fetching student:", error);
        });
    }
  }, [RollNo]);

  function handleBranch(e) {
    setBranch(e.target.value);
  }

  function handleRollNo(e) {
    setRollNo(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePercentage(e) {
    setPercentage(e.target.value);
  }

  function saveStudent(e) {
    e.preventDefault();

    const student = { rollNo, branch, name, percentage };

    if (RollNo) {
      updateStudent(RollNo, student) // Ensure you have an updateStudent function
        .then((response) => {
          console.log(response.data);
          navigate("/students");
        })
        .catch((error) => {
          console.error("Error updating student:", error);
        });
    } else {
      createStudent(student)
        .then((response) => {
          console.log(response.data);
          navigate("/students");
        })
        .catch((error) => {
          console.error("Error saving student:", error);
        });
    }
  }

  function TitleName() {
    return RollNo ? (
      <h4 className="text-center">Update Existing Student</h4>
    ) : (
      <h4 className="text-center">New Student Registration</h4>
    );
  }

  return (
    <div className="container">
      <br />
      <div className="row"></div>
      <div className="card col-md-6 offset-md-3 offset-md-3">
        {TitleName()}
        <div className="card-body">
          <form onSubmit={saveStudent}>
            <div className="form-group mb-2">
              <label className="form-label"> Roll Number</label>
              <input
                type="number"
                placeholder="Enter Roll Number"
                name="rollNo"
                value={rollNo}
                className="form-control"
                onChange={handleRollNo}
                disabled={!!RollNo} // Disable input if RollNo exists for updating
              />
            </div>

            <div className="form-group mb-2">
              <label className="form-label"> Branch:</label>
              <input
                type="text"
                placeholder="Enter Branch Name"
                name="branch"
                value={branch}
                className="form-control"
                onChange={handleBranch}
              />
            </div>

            <div className="form-group mb-2">
              <label className="form-label"> Full Name:</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                value={name}
                className="form-control"
                onChange={handleName}
              />
            </div>

            <div className="form-group mb-2">
              <label className="form-label"> Percentage:</label>
              <input
                type="number"
                placeholder="Enter Percentage"
                name="percentage"
                value={percentage}
                className="form-control"
                onChange={handlePercentage}
              />
            </div>

            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Students;
