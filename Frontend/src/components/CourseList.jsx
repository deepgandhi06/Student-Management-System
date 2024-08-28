import React, { useState, useEffect } from "react";
import { Coursedata } from "../services/CourseService";

const CourseList = () => {
  /* const tempdata = [
    {
      id: "S001",
      name: "Operating System",
      Teacher: "Amit Kumar",
    },
    {
      id: "S002",
      name: "Computer Network",
      Teacher: "Amit Kumar",
    },
    {
      id: "S003",
      name: "Software Enginerring",
      Teacher: "Amit Kumar",
    },
    {
      id: "S004",
      name: "Big Data",
      Teacher: "Amit Kumar",
    },
  ];*/
  const [Course, setCourse] = useState([]);

  useEffect(() => {
    Coursedata()
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container ">
      <h4 className="text-center">Course List</h4>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>CourseId</th>
            <th>Name</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {Course.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
