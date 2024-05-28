import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";

const EmcetStudentFormDataDisplay = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://q64g08xm-8080.inc1.devtunnels.ms/api/v1/user/emcet-student-data/1"
        );
        console.log("API Response:", response.data); // Log the response to the console
        setFormData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintPDF = () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    pdf.html(componentRef.current, {
      callback: function (pdf) {
        pdf.save("form_data.pdf");
      },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!formData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1 style={{ marginLeft: "20px" }}>Form Data</h1>

      <div ref={componentRef} style={{ marginLeft: "20px" }}>
        <div>
          <h2>Applicant Details</h2>
          <p>Name of Applicant: {formData && formData.nameOfApplicant}</p>
          <p>Father's Name: {formData && formData.fatherName}</p>
          <p>Date of Birth: {formData && formData.dateOfBirth}</p>
          <p>
            Address of Communication:{" "}
            {formData && formData.addressOfCommunication}
          </p>
          <p>Phone Number: {formData && formData.phoneNumber}</p>
          <p>Aadhar Number: {formData && formData.aadharNo}</p>
          <p>Category: {formData && formData.category}</p>
          <p>Course Name: {(formData && formData.courseName) || "N/A"}</p>
          <p>
            With Reference Of: {(formData && formData.withReferenceOf) || "N/A"}
          </p>
          <p>Friends: {(formData && formData.reference) || "N/A"}</p>
        </div>
        <h3>Educational Details</h3>
        <div>
          <p>SSC School Name: {formData && formData.sscSchoolName}</p>
          <p>SSC Passing Year: {formData && formData.sscPassingYear}</p>
          <p>SSC Percentage: {formData && formData.sscPercentage}</p>
          <p>HSC School Name: {formData && formData.hscSchoolName}</p>
          <p>HSC Passing Year: {formData && formData.hscPassingYear}</p>
          <p>HSC Percentage: {formData && formData.hscPercentage}</p>
          <p>EMCET Hall Ticket No: {formData && formData.EMCETHallTicketNo}</p>
          <p>EMCET Rank: {formData && formData.EMCETRank}</p>
        </div>
      </div>
      <Link to="/">Go Back</Link>
      <div>
        <button onClick={handlePrint}>Print</button>
      </div>
      <div>
        <button onClick={handlePrintPDF}>Print PDF</button>
      </div>
    </div>
  );
};

export default EmcetStudentFormDataDisplay;
