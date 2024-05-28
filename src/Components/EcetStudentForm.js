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
    cast: "",
    qualifyingDetails: [
      {
        polytechnicClgName: "",
        polytechnicPassingYear: "",
        polytechnicPercentage: "",
        ECETHallTicketNo: "",
        ECETRank: "",
      },
    ],
    nameofInstution: "",
    courseName: [],
    withReferenceOf: "",
    reference: [
      {
        friendName: "",
        friendPhoneNumber: "",
      },
    ],
    courseLevels: [],
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
    const updatedCourseLevels = checked
      ? [...formData.courseLevels, value]
      : formData.courseLevels.filter((level) => level !== value);
    setFormData({
      ...formData,
      courseLevels: updatedCourseLevels,
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
                    <option value="BCB">BCB</option>
                    <option value="BCC">BCC</option>
                    <option value="BCD">BCD</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
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
                  <label>Select Course:</label>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="EEE"
                      checked={formData.courseLevels.includes("EEE")}
                      onChange={handleCheckboxChange}
                    />
                    EEE
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="ECE"
                      checked={formData.courseLevels.includes("ECE")}
                      onChange={handleCheckboxChange}
                    />
                    ECE
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="CIVIL"
                      checked={formData.courseLevels.includes("CIVIL")}
                      onChange={handleCheckboxChange}
                    />
                    CIVIL
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="MECH"
                      checked={formData.courseLevels.includes("MECH")}
                      onChange={handleCheckboxChange}
                    />
                    MECH
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="IT"
                      checked={formData.courseLevels.includes("IT")}
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

export default EcetStudentForm;
