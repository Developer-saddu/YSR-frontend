import React from "react";
import { useNavigate } from "react-router-dom";

const FormStepOne = () => {
  const navigate = useNavigate();

  const handleButtonClick = (examType) => () => {
    if (examType === "EAMCET") {
      console.log(1233);
      navigate("/EMCET/student-form");
    } else if (examType === "ECET") {
      navigate("/ECET/student-form");
    } else if (examType === "ICET") {
      navigate("/ICET/student-form");
    } else if (examType === "PGCET") {
      navigate("/PGCET/student-form");
    } else if (examType === "MANAGEMENT") {
      navigate("/MANAGEMENT/student-form");
    }
  };

  return (
    <div>
      <h2>Please select your Exam Type</h2>
      <div className="button-group">
        <button
          type="button"
          name="EAMCET"
          onClick={handleButtonClick("EAMCET")}
        >
          EAMCET
        </button>
        <br />
        <br />
        <button type="button" name="ECET" onClick={handleButtonClick("ECET")}>
          ECET
        </button>
        <br />
        <br />
        <button type="button" name="ICET" onClick={handleButtonClick("ICET")}>
          ICET
        </button>
        <br />
        <br />
        <button type="button" name="PGCET" onClick={handleButtonClick("PGCET")}>
          PGECET
        </button>
        <br />
        <br />
        <button
          type="button"
          name="MANAGEMENT"
          onClick={handleButtonClick("MANAGEMENT")}
        >
          Management
        </button>
      </div>
    </div>
  );
};

export default FormStepOne;
