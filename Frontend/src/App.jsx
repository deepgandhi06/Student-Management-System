import CourseList from "./components/CourseList";
import Footer from "./components/footer";
import Header from "./components/Header";
import StudentList from "./components/studentList";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Home from "./components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/students" element={<StudentList />}></Route>
          <Route path="/courses" element={<CourseList />}></Route>
          <Route path="/add-students" element={<Students />}></Route>
          <Route path="/update/:RollNo" element={<Students />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
