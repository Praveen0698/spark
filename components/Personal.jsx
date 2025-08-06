import React, { useRef, useState } from "react";

// Shared base styles
const tdStyle = {
  padding: "6px 10px",
  fontSize: "13px",
  verticalAlign: "top",
  width: "25%",
  boxSizing: "border-box",
};

const inputStyle = {
  border: "none",
  borderBottom: "1px dotted #333",
  fontSize: "13px",
  width: "100%",
  outline: "none",
  background: "transparent",
  boxSizing: "border-box",
};

const fileInputStyle = {
  fontSize: "13px",
  width: "100%",
  boxSizing: "border-box",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  tableLayout: "fixed",
};

const sectionStyle = {
  fontFamily: "serif",
  pageBreakInside: "avoid",
  padding: "10px",
  width: "100%",
  boxSizing: "border-box",
};

const headingStyle = {
  fontSize: "16px",
  marginBottom: "4px",
  fontWeight: "bold",
};

const subHeadingStyle = {
  fontSize: "12px",
  color: "#555",
  marginBottom: "10px",
};

// Drop area style for signature boxes
const dropAreaStyle = {
  border: "1px dashed #aaa",
  width: "100%",
  maxWidth: "200px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  margin: "10px 50px",
  boxSizing: "border-box",
};

const Personal = ({ formData, setFormData }) => {
  const [signOneSrc, setSignOneSrc] = useState("");
  const [signTwoSrc, setSignTwoSrc] = useState("");

  const fileSignOneRef = useRef(null);
  const fileSignTwoRef = useRef(null);

  const handleSignOneClick = () => fileSignOneRef.current.click();
  const handleSignTwoClick = () => fileSignTwoRef.current.click();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const renderInput = (name, type = "text") => {
    if (type === "file") {
      return (
        <input
          type="file"
          name={name}
          onChange={handleFileChange}
          style={fileInputStyle}
        />
      );
    }

    return (
      <input
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleInputChange}
        style={inputStyle}
      />
    );
  };

  return (
    <section style={sectionStyle}>
      <h3 style={headingStyle}>
        ANNEXURE-A: <span>Personal Details</span>
      </h3>
      <p style={subHeadingStyle}>(To be filled by the prospective employee)</p>

      <table style={tableStyle}>
        <tbody>
          {[
            ["Name", "name", "", ""],
            ["Date of Birth", "dob", "Sex", "sex"],
            ["Father's Name", "fatherName", "", ""],
            ["Mother's Name", "motherName", "", ""],
            ["Nationality", "nationality", "State", "state"],
            ["Caste", "caste", "Religion", "religion"],
            ["Category (General/SC/ST/OBC)", "casteCategory", "Physically Handicapped (Yes/No)", "physicallyHandicapped"],
            ["Ex-Servicemen (Yes/No)", "exServicemen", "PAN Number", "panNumber"],
            ["Voter ID", "voterId", "Ration Card", "rationCardNo"],
            ["Identification Marks", "identificationOne", "identificationTwo", "identificationThree"],
            ["Height", "height", "Marital Status", "martialStatus"],
            ["Spouse's Name", "spouseName", "", ""],
            ["Spouse Religion", "spouseReligion", "Spouse Caste", "spouseCaste"],
            ["Inter Religion/Caste Marriage (Yes/No)", "interReligionCaste", "Spouse Employed", "spouseEmployeed"],
            ["Spouse Employed In (Org.)", "spouseEmployeedIn", "", ""],
            ["Upload Address Proof", "addressProof", "Upload PAN Card", "panCardFile"],
          ].map(([label1, name1, label2, name2], index) => (
            <tr key={index}>
              <td style={tdStyle}>{label1}</td>
              <td style={tdStyle}>{renderInput(name1, name1.toLowerCase().includes("file") ? "file" : "text")}</td>
              {label2 && name2 ? (
                <>
                  <td style={tdStyle}>{label2}</td>
                  <td style={tdStyle}>{renderInput(name2, name2.toLowerCase().includes("file") ? "file" : "text")}</td>
                </>
              ) : (
                <>
                  <td style={tdStyle}></td>
                  <td style={tdStyle}></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Signatures */}
      <div
        className="signature"
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div style={{ flex: "1 1 200px", textAlign: "center" }}>
          <p style={{ fontWeight: 400 }}>Left thumb impression</p>
          <div style={dropAreaStyle} onClick={handleSignOneClick}>
            <input
              type="file"
              name="signOne"
              onChange={(e) => {
                handleFileChange(e);
                const reader = new FileReader();
                reader.onload = (e) => setSignOneSrc(e.target.result);
                reader.readAsDataURL(e.target.files[0]);
              }}
              style={{ display: "none" }}
              ref={fileSignOneRef}
            />
            {signOneSrc ? (
              <img
                src={signOneSrc}
                alt="Uploaded"
                style={{
                  width: "100%",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <div style={{ fontSize: "13px", color: "#555" }}>Upload</div>
            )}
          </div>
        </div>

        <div style={{ flex: "1 1 200px", textAlign: "center" }}>
          <p style={{ fontWeight: 400 }}>Applicant Signature</p>
          <div style={dropAreaStyle} onClick={handleSignTwoClick}>
            <input
              type="file"
              name="signTwo"
              onChange={(e) => {
                handleFileChange(e);
                const reader = new FileReader();
                reader.onload = (e) => setSignTwoSrc(e.target.result);
                reader.readAsDataURL(e.target.files[0]);
              }}
              style={{ display: "none" }}
              ref={fileSignTwoRef}
            />
            {signTwoSrc ? (
              <img
                src={signTwoSrc}
                alt="Uploaded"
                style={{
                  width: "100%",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <div style={{ fontSize: "13px", color: "#555" }}>Upload</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
