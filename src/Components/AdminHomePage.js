import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();

  const handleAddAdmin = () => {
    console.log("Add Sub-Admin clicked");
    navigate("/admin-registrations-page");
  };

  const handleFindStudent = (examType) => {
    console.log(`Find Student (${examType}) clicked`);
    navigate(`/find-student/${examType}`);
  };

  const handleListExams = () => {
    console.log("List All Exams clicked");
    navigate("/list-exams");
  };

  return (
    <div>
      <h2>Admin Home Page</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={handleAddAdmin}>Add Admin</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleFindStudent("EAMCET")}>
                Find Student (EAMCET)
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleFindStudent("ECET")}>
                Find Student (ECET)
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleFindStudent("ICET")}>
                Find Student (ICET)
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleFindStudent("PGECET")}>
                Find Student (PGECET)
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleFindStudent("Management")}>
                Find Student (Management)
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={handleListExams}>List All Exams</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminHomePage;
