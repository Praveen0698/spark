import React, { useRef, useState } from "react";

const tdStyle = {
  padding: "6px 10px",
  fontSize: "13px",
  verticalAlign: "top",
};

const inputStyle = {
  border: "none",
  borderBottom: "1px dotted #333",
  fontSize: "13px",
  width: "100%",
  outline: "none",
  background: "transparent",
};

const fileInputStyle = {
  fontSize: "13px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const sectionStyle = {
  fontFamily: "serif",
  pageBreakInside: "avoid",
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

const Personal = ({ formData, setFormData }) => {
  const [signOneSrc, setSignOneSrc] = useState("");
  const [signTwoSrc, setSignTwoSrc] = useState("");

  const fileSignOneRef = useRef(null);
  const fileSignTwoRef = useRef(null);

  const handleSignOneClick = () => {
    fileSignOneRef.current.click();
  };

  const handleSignTwoClick = () => {
    fileSignTwoRef.current.click();
  };

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
          <tr>
            <td style={tdStyle}>Name</td>
            <td colSpan={3} style={tdStyle}>
              {renderInput("name")}
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Date of Birth</td>
            <td style={tdStyle}>{renderInput("dob")}</td>
            <td style={tdStyle}>Sex</td>
            <td style={tdStyle}>{renderInput("sex")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Father's Name</td>
            <td colSpan={3} style={tdStyle}>
              {renderInput("fatherName")}
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Mother's Name</td>
            <td colSpan={3} style={tdStyle}>
              {renderInput("motherName")}
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Nationality</td>
            <td style={tdStyle}>{renderInput("nationality")}</td>
            <td style={tdStyle}>State</td>
            <td style={tdStyle}>{renderInput("state")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Caste</td>
            <td style={tdStyle}>{renderInput("caste")}</td>
            <td style={tdStyle}>Religion</td>
            <td style={tdStyle}>{renderInput("religion")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Category (General/SC/ST/OBC)</td>
            <td style={tdStyle}>{renderInput("casteCategory")}</td>
            <td style={tdStyle}>Physically Handicapped (Yes/No)</td>
            <td style={tdStyle}>{renderInput("physicallyHandicapped")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Ex-Servicemen (Yes/No)</td>
            <td style={tdStyle}>{renderInput("exServicemen")}</td>
            <td style={tdStyle}>PAN Number</td>
            <td style={tdStyle}>{renderInput("panNumber")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Voter ID</td>
            <td style={tdStyle}>{renderInput("voterId")}</td>
            <td style={tdStyle}>Ration Card</td>
            <td style={tdStyle}>{renderInput("rationCardNo")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Identification Marks</td>
            <td style={tdStyle}>{renderInput("identificationOne")}</td>
            <td style={tdStyle}>{renderInput("identificationTwo")}</td>
            <td style={tdStyle}>{renderInput("identificationThree")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Height</td>
            <td style={tdStyle}>{renderInput("height")}</td>
            <td style={tdStyle}>Marital Status</td>
            <td style={tdStyle}>{renderInput("martialStatus")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Spouse's Name</td>
            <td colSpan={3} style={tdStyle}>
              {renderInput("spouseName")}
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Spouse Religion</td>
            <td style={tdStyle}>{renderInput("spouseReligion")}</td>
            <td style={tdStyle}>Spouse Caste</td>
            <td style={tdStyle}>{renderInput("spouseCaste")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Inter Religion/Caste Marriage (Yes/No)</td>
            <td style={tdStyle}>{renderInput("interReligionCaste")}</td>
            <td style={tdStyle}>Spouse Employed</td>
            <td style={tdStyle}>{renderInput("spouseEmployeed")}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Spouse Employed In (Org.)</td>
            <td colSpan={3} style={tdStyle}>
              {renderInput("spouseEmployeedIn")}
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Upload Address Proof</td>
            <td style={tdStyle}>{renderInput("addressProof", "file")}</td>
            <td style={tdStyle}>Upload PAN Card</td>
            <td style={tdStyle}>{renderInput("panCardFile", "file")}</td>
          </tr>
        </tbody>
      </table>

      <div className="signature">
        <div className="specimen" style={{ width: "100%" }}>
          <div className="specimen-signature">
            <p style={{ fontWeight: 400 }}>Left thumb impression</p>
            <p style={{ fontWeight: 400 }}>Applicant Signature</p>
          </div>
          <div className="signature-file">
            <div className="drop-area" onClick={handleSignOneClick}>
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
                    width: "200px",
                    height: "50px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              ) : (
                <div className="upload-text">Upload</div>
              )}
            </div>

            <div className="drop-area" onClick={handleSignTwoClick}>
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
                    width: "200px",
                    height: "50px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              ) : (
                <div className="upload-text">Upload</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
