import React, { useState } from "react";
import "../CSS/StudentForm.css";

const EmcetStudentForm = () => {
  const [formData, setFormData] = useState({
    nameOfApplicant: "Saddam Ansari",
    fatherName: "Yasin",
    dateOfBirth: "1999-01-28",
    addressOfCommunication: "Ateeque House Ali Nagar Ameerpet Hyderabad",
    phoneNumber: "08521538489",
    aadharNo: "78945612311",
    category: "BC",
    qualifyingDetails: [
      {
        sscSchoolName: "MEHS",
        sscPassingYear: "2015",
        sscPercentage: "62.8",
        hscSchoolName: "AAIC",
        hscPassingYear: "2017",
        hscPercentage: "54.6",
        EMCETHallTicketNo: "123456",
        EMCETRank: "100",
      },
    ],
    nameofInstution: "OU",
    courseName: [],
    withReferenceOf: "Rakesh",
    reference: [
      {
        friendName: "",
        friendPhoneNumber: "",
      },
    ],
    date: "2024-05-02",
    // courseName: [],
  });

  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNestedChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQualifyingDetails = [...formData.qualifyingDetails];
    updatedQualifyingDetails[index][name] = value;
    setFormData({
      ...formData,
      qualifyingDetails: updatedQualifyingDetails,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedcourseName = checked
      ? [...formData.courseName, value]
      : formData.courseName.filter((level) => level !== value);
    setFormData({
      ...formData,
      courseName: updatedcourseName,
    });
  };

  const handleAddFriend = () => {
    setFormData({
      ...formData,
      reference: [
        ...formData.reference,
        { friendName: "", friendPhoneNumber: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://q64g08xm-8080.inc1.devtunnels.ms/api/v1/user/emcet-student-registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
                      <label>SSC School Name:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="sscSchoolName"
                        value={detail.sscSchoolName}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>SSC(10th) Passing Year:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="sscPassingYear"
                        value={detail.sscPassingYear || 1995}
                        onChange={(e) => handleNestedChange(index, e)}
                        min="1900"
                        max="2100"
                        step="1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>SSC(10th) Percentage:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="sscPercentage"
                        value={detail.sscPercentage}
                        onChange={(e) => handleNestedChange(index, e)}
                        min="0"
                        max="100"
                        step="0.01"
                        placeholder="Enter percentage"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>HSC School Name:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="hscSchoolName"
                        value={detail.hscSchoolName}
                        onChange={(e) => handleNestedChange(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>HSC(12th) Passing Year:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="hscPassingYear"
                        value={detail.hscPassingYear || 1995}
                        onChange={(e) => handleNestedChange(index, e)}
                        min="1900"
                        max="2100"
                        step="1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>HSC(12th) Percentage:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="hscPercentage"
                        value={detail.hscPercentage}
                        onChange={(e) => handleNestedChange(index, e)}
                        min="0"
                        max="100"
                        step="0.01"
                        placeholder="Enter percentage"
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
                        name="EMCETHallTicketNo"
                        value={detail.EMCETHallTicketNo}
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
                        name="EMCETRank"
                        value={detail.EMCETRank}
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
                  <label>Cast:</label>
                </td>
                <td>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="OC">OC/EWS</option>
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
                  <label>Course Levels:</label>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="EEE"
                      checked={formData.courseName.includes("EEE")}
                      onChange={handleCheckboxChange}
                    />
                    EEE
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="ECE"
                      checked={formData.courseName.includes("ECE")}
                      onChange={handleCheckboxChange}
                    />
                    ECE
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="CSE"
                      checked={formData.courseName.includes("CSE")}
                      onChange={handleCheckboxChange}
                    />
                    CSE
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="CIVIL"
                      checked={formData.courseName.includes("CIVIL")}
                      onChange={handleCheckboxChange}
                    />
                    CIVIL
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="MECH"
                      checked={formData.courseName.includes("MECH")}
                      onChange={handleCheckboxChange}
                    />
                    MECH
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="IT"
                      checked={formData.courseName.includes("IT")}
                      onChange={handleCheckboxChange}
                    />
                    IT
                  </label>
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
                <tr>
                  <td>
                    <label>Friends Details:</label>
                  </td>
                </tr>
                <td>
                  {formData.reference.map((reference, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        name={`friendName${index}`}
                        value={reference.friendName}
                        onChange={(e) => {
                          const updatedReferences = [...formData.reference];
                          updatedReferences[index].friendName = e.target.value;
                          setFormData({
                            ...formData,
                            reference: updatedReferences,
                          });
                        }}
                        placeholder="Enter Friend Name"
                      />

                      <input
                        type="text"
                        name={`friendPhoneNumber${index}`}
                        value={reference.friendPhoneNumber}
                        onChange={(e) => {
                          const updatedReferences = [...formData.reference];
                          updatedReferences[index].friendPhoneNumber =
                            e.target.value;
                          setFormData({
                            ...formData,
                            reference: updatedReferences,
                          });
                        }}
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

export default EmcetStudentForm;
