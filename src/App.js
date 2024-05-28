import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import FormSubmissionSuccess from "./Components/Success";
import StudentForm from "./Components/StudentForm";
import FormStepOne from "./Components/FormStepOne ";
import EmcetStudentForm from "./Components/EmcetStudentForm";
import EcetStudentForm from "./Components/EcetStudentForm";
import IcetStudentForm from "./Components/IcetStudentForm";
import ManagementStudentForm from "./Components/ManagmentStudentForm";
import PgcetStudentForm from "./Components/PgecetStudentForm";
import EmcetStudentFormDataDisplay from "./Components/EmcetStudentFormDataDisplay";
import AdminLoginPage from "./Components/AdminLoginPage";
import AdminHomePage from "./Components/AdminHomePage";
import AdminRegistrationPage from "./Components/AdminRegistrationsPage";
import RegistrationSuccess from "./Components/AdminResponseComponets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<FormSubmissionSuccess />} />
        <Route path="/*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/student-form" element={<StudentForm />} />
        <Route path="/landing/student-form" element={<FormStepOne />} />
        <Route path="/EMCET/student-form" element={<EmcetStudentForm />} />
        <Route
          path="/emcet/student-data/display"
          element={<EmcetStudentFormDataDisplay />}
        />
        <Route path="/ECET/student-form" element={<EcetStudentForm />} />
        <Route path="/ICET/student-form" element={<IcetStudentForm />} />
        <Route path="/PGCET/student-form" element={<PgcetStudentForm />} />

        <Route
          path="/MANAGEMENT/student-form"
          element={<ManagementStudentForm />}
        />

        <Route path="/success" element={<FormSubmissionSuccess />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/home" element={<AdminHomePage />} />
        <Route
          path="/admin-registrations-page"
          element={<AdminRegistrationPage />}
        ></Route>
        <Route
          path="/registaretion-success"
          element={<RegistrationSuccess />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
