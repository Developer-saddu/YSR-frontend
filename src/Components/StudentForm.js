import React, { useState } from "react";
import "../CSS/StudentForm.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    nameOfApplicant: "",
    fatherName: "",
    dateOfBirth: "",
    addressOfCommunication: "",
    phoneNumber: "",
    aadharNo: "",
    category: "",
    qualifyingDetails: [
      {
        course: "",
        boardUniversity: "",
        year: "",
        markObtained: "",
        percentage: "",
        grade: "",
        HNo: "",
        rank: ""
      }
    ],
    nameofInstution: "",
    courseName: [
      {
        course: "",
        branch: ""
      }
    ],
    paymentStructure: "",
    withReferenceOf: "",
    reference: [
      {
        name: "",
        referencePhoneNumber: ""
      }
    ]
  });

  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNestedChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQualifyingDetails = [...formData.qualifyingDetails];
    updatedQualifyingDetails[index][name] = value;
    setFormData({
      ...formData,
      qualifyingDetails: updatedQualifyingDetails
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://q64g08xm-8080.inc1.devtunnels.ms/api/v1/user/student-registrations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Form submitted successfully:", responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {page === 1 && (
        <div>
          <table>
            <tbody>
              {formData.qualifyingDetails.map((detail, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td colSpan="2">
                      <h3>Qualifying Details {index + 1}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Course:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="course"
                        value={detail.course}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Board University:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="boardUniversity"
                        value={detail.boardUniversity}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Year:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="year"
                        value={detail.year}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Mark Obtained:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="markObtained"
                        value={detail.markObtained}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Percentage:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="percentage"
                        value={detail.percentage}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Grade:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="grade"
                        value={detail.grade}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>HNo:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="HNo"
                        value={detail.HNo}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Rank:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="rank"
                        value={detail.rank}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
              <tr>
                <td colSpan="2">
                  <button type="button" onClick={() => setPage(2)}>
                    Next
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {page === 2 && (
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Select Date:</label>
                </td>
                <td>
                  <input
                    type="date"
                    name="ate"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Name of Applicant:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="nameOfApplicant"
                    value={formData.nameOfApplicant}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Father's Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Date of Birth:</label>
                </td>
                <td>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Address of Communication:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="addressOfCommunication"
                    value={formData.addressOfCommunication}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Aadhar Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Category:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Institution Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="nameofInstution"
                    value={formData.nameofInstution}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Course Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="courseName"
                    value={formData.courseName[0].course}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Branch:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="branch"
                    value={formData.courseName[0].branch}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Payment Structure:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="paymentStructure"
                    value={formData.paymentStructure}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>With Reference Of:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="withReferenceOf"
                    value={formData.withReferenceOf}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Reference Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="referenceName"
                    value={formData.reference[0].name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Reference Phone Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="referencePhoneNumber"
                    value={formData.reference[0].referencePhoneNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="button" onClick={() => setPage(1)}>
                    Previous
                  </button>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </form>
  );
};

export default StudentForm;
