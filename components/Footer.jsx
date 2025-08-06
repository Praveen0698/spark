import React, { useEffect, useState } from "react";

const headingStyleBase = {
  fontWeight: "bold",
};

const dottedInputBase = {
  border: "none",
  borderBottom: "1px dotted black",
  outline: "none",
  background: "transparent",
};

const Footer = ({ formData, setFormData }) => {
  const [inputWidths, setInputWidths] = useState({
    small: "100px",
    medium: "150px",
    large: "200px",
    xlarge: "300px",
  });

  useEffect(() => {
    const updateWidths = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setInputWidths({
          small: "80px",
          medium: "100px",
          large: "120px",
          xlarge: "180px",
        });
      } else if (width < 768) {
        setInputWidths({
          small: "100px",
          medium: "130px",
          large: "170px",
          xlarge: "240px",
        });
      } else {
        setInputWidths({
          small: "100px",
          medium: "150px",
          large: "200px",
          xlarge: "300px",
        });
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dottedInput = (widthKey) => ({
    ...dottedInputBase,
    width: inputWidths[widthKey],
  });

  return (
    <>
      {/* ANNEXURE-D */}
      <section style={{ margin: "50px 0", fontFamily: "serif" }}>
        <h3 style={{ ...headingStyleBase, fontSize: "16px", marginBottom: "20px" }}>
          ANNEXURE-D: <span> Declaration </span>
        </h3>

        <p style={{ lineHeight: "1.8" }}>
          “I{" "}
          <input type="text" name="candidateName" style={dottedInput("large")} onChange={handleInputChange} />
          {" "}Son/daughter of Shri{" "}
          <input type="text" name="fatherName" style={dottedInput("large")} onChange={handleInputChange} />
          , resident{" "}
          <input type="text" name="residence" style={dottedInput("small")} onChange={handleInputChange} /> of{" "}
          <input type="text" name="street" style={dottedInput("medium")} onChange={handleInputChange} /> Street,{" "}
          <input type="text" name="village" style={dottedInput("medium")} onChange={handleInputChange} /> Village/Town/City,{" "}
          <input type="text" name="district" style={dottedInput("medium")} onChange={handleInputChange} /> District,{" "}
          <input type="text" name="state" style={dottedInput("medium")} onChange={handleInputChange} /> State, hereby declare that I belong to the{" "}
          <input type="text" name="minorityCommunity" style={dottedInput("xlarge")} onChange={handleInputChange} /> (indicate minority community notified by Central Government i.e.
          Muslim/Sikh/Christian/Buddhist/Parsi/Jain).
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth < 600 ? "column" : "row",
            justifyContent: "space-between",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          <div>
            <p>
              Place:{" "}
              <input type="text" name="place" style={dottedInput("medium")} onChange={handleInputChange} />
            </p>
            <p>
              Date:{" "}
              <input type="text" name="date" style={dottedInput("medium")} onChange={handleInputChange} />
            </p>
          </div>

          <div style={{ textAlign: window.innerWidth < 600 ? "left" : "right" }}>
            <p>Signature of the Candidate:</p>
            <input
              type="text"
              name="signature"
              style={{ ...dottedInput("large"), marginBottom: 10 }}
              onChange={handleInputChange}
            />
            <p>Name of the Candidate:</p>
            <input
              type="text"
              name="nameAgain"
              style={dottedInput("large")}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div style={{ marginTop: "30px", fontSize: "14px" }}>
          <strong>Note:</strong> At the time of document verification, such
          candidates claiming waiver of examination fee will be required to
          furnish ‘Minority Community Declaration’ affidavit on Non Judicial
          Stamp paper that he/she belongs to any of the minority community
          notified by Central Government (i.e.
          Muslim/Sikh/Christian/Buddhist/Parsi/Jain).
        </div>
      </section>

      {/* ANNEXURE-E */}
      <section style={{ fontFamily: "serif" }}>
        <h3 style={{ ...headingStyleBase, fontSize: "16px", marginBottom: "20px" }}>
          ANNEXURE-E: <span> Income Details </span>
        </h3>

        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            textDecoration: "underline",
            fontSize: window.innerWidth < 600 ? "14px" : "16px",
          }}
        >
          INCOME CERTIFICATE TO BE SUBMITTED BY ECONOMICALLY BACKWARD CANDIDATE
          FOR WAIVING EXAMINATION FEES
        </h2>

        <div style={{ marginTop: "40px", lineHeight: "2" }}>
          {[
            "Name of Candidate",
            "Father's Name",
            "Age",
            "Residential Address",
            "Annual Family Income (In words & Figures)",
            "Date of Issue",
            "Signature",
            "Stamp of Issuing Authority",
          ].map((label, index) => (
            <p key={index}>
              {index + 1}. {label}:{" "}
              <input
                type="text"
                name={`income_${index}`}
                style={dottedInput("xlarge")}
                onChange={handleInputChange}
              />
            </p>
          ))}
        </div>

        <div style={{ marginTop: "30px", fontSize: "14px" }}>
          <p>
            <strong>Note –</strong> Economically backward classes will mean the
            candidates whose family income is less than Rs. 50,000/- per annum.
            The following authorities are authorized to issue income
            certificates for the purpose of identifying economically backward
            classes:
          </p>
          <ol style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>
              District Magistrate or any other Revenue Officer up to the level
              of Tehsildar.
            </li>
            <li>
              Sitting Member of Parliament of Lok Sabha for persons of their own
              constituency.
            </li>
            <li>
              BPL Card or any other certificate issued by the Central Government
              under a recognized poverty alleviation programme or Izzat MST
              issued by Railways.
            </li>
            <li>
              Union Minister may also recommend to RRC for any persons from
              anywhere in the country.
            </li>
            <li>
              Sitting Member of Parliament of Rajya Sabha for persons of the
              district in which these MPs normally reside.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Footer;
