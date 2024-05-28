import React, { useState } from "react";
import "../CSS/StudentForm.css";

const EcetStudentForm = () => {
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
        polytechnicClgName: "",
        university: "",
        polytechnicPassingYear: "",
        polytechnicObtainedMarks: "",
        polytechnicPercentage: "",
        polytechnicGrade: "",
        ECETHallTicketNo: "",
        ECETRank: ""
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
        friendName: "",
        friendPhoneNumber: ""
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
  const handleAddFriend = () => {
    setFormData({
      ...formData,
      reference: [
        ...formData.reference,
        { friendName: "", friendPhoneNumber: "" }
      ]
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
                      <h3>Qualifying Details for Engineering</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Polytechnic College Name:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="polytechnicClgName"
                        value={detail.polytechnicClgName}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Enter University:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="university"
                        value={detail.university}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Polytechnic Passing Year:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="polytechnicPassingYear"
                        value={detail.polytechnicPassingYear || 1995}
                        onChange={(e) => handleNestedChange(index, e)}
                        min="1900"
                        max="2100"
                        step="1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Polytechnic Mark Obtained:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="polytechnicObtainedMarks"
                        value={detail.polytechnicObtainedMarks}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Polytechnic Percentage:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="polytechnicPercentage"
                        value={detail.polytechnicPercentage}
                        onChange={(e) => handleNestedChange(index, e)}
                        min="33.33"
                        max="100"
                        step="0.1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Polytechnic Grade:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="polytechnicGrade"
                        value={detail.polytechnicGrade}
                        onChange={(e) => handleNestedChange(index, e)}
                        maxLength="2"
                        placeholder="Enter grade"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>EMCET Hall Ticket No:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ECETHallTicketNo"
                        value={detail.ECETHallTicketNo}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>EMCET Rank:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="ECETRank"
                        value={detail.ECETRank}
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
                    name="date"
                    value={formData.date}
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
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="OC">OC</option>
                    <option value="BC">BCA</option>
                    <option value="OC">BCB</option>
                    <option value="OC">BCC</option>
                    <option value="OC">BCD</option>
                    <option value="OC">SC</option>
                    <option value="OC">ST</option>
                  </select>
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
                  <select
                    name="paymentStructure"
                    value={formData.paymentStructure}
                    onChange={handleChange}
                  >
                    <option value="">Select Payment Structure</option>
                    <option value="One Time Payment">One Time Payment</option>
                    <option value="Annual Payment">Annual Payment</option>
                  </select>
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
              <td>
                <label>Friend Details:</label>
              </td>
              <tr>
                <td></td>
                <td>
                  {formData.reference.map((reference, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        name={`friendName${index}`}
                        value={reference.friendName}
                        onChange={handleChange}
                        placeholder="Enter Friend Name"
                      />

                      <input
                        type="text"
                        name={`friendPhoneNumber${index}`}
                        value={reference.friendPhoneNumber}
                        onChange={handleChange}
                        placeholder="Enter Friend Number"
                      />
                    </div>
                  ))}
                  <button type="button" onClick={handleAddFriend}>
                    + Add Friend
                  </button>
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

export default EcetStudentForm;
