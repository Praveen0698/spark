import React from "react";

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

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const sectionStyle = {
  fontFamily: "Arial, sans-serif",
  marginTop: "60px",
  pageBreakInside: "avoid",
};

const headingStyle = {
  fontSize: "16px",
  marginBottom: "6px",
  fontWeight: "bold",
};

const subHeadingStyle = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "14px",
};

const Contact = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderInput = (name) => (
    <input
      type="text"
      name={name}
      value={formData[name] || ""}
      onChange={handleInputChange}
      style={inputStyle}
    />
  );

  return (
    <section style={sectionStyle}>
      <h3 style={headingStyle}>
        ANNEXURE-B: <span>Contact Details</span>
      </h3>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td colSpan={2} style={subHeadingStyle}>Present Address</td>
            <td colSpan={2} style={subHeadingStyle}>Permanent Address</td>
          </tr>

          {[
            ["House No. and Name", "presentHouseName", "permanentHouseName"],
            ["Street Name", "presentStreetName", "permanentStreetName"],
            ["Place", "presentPlace", "permanentPlace"],
            ["Pin", "presentPin", "permanentPin"],
            ["State", "presentState", "permanentState"],
            ["District", "presentDistrict", "permanentDistrict"],
            ["Taluk", "presentTaluk", "permanentTaluk"],
            ["Village", "presentVillage", "permanentVillage"],
            ["Phone No.", "presentPhoneNo", "permanentPhoneNo"],
            ["Home Town", "presentHomeTown", "permanentHomeTown"],
            ["Email address", "presentEmail", "permanentEmail"],
          ].map(([label, presentField, permanentField], idx) => (
            <tr key={idx}>
              <td style={tdStyle}>{label}</td>
              <td style={tdStyle}>{renderInput(presentField)}</td>
              <td style={tdStyle}>{label}</td>
              <td style={tdStyle}>{renderInput(permanentField)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Contact;
