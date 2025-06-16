import React from "react";

const Footer = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section style={{ marginTop: "50px" }}>
      <h3 style={{ marginBottom: 20 }}>
        ANNEXURE-B: <span> Declaration </span>
      </h3>

      <p style={{ lineHeight: "1.8" }}>
        “I{" "}
        <input
          type="text"
          name="candidateName"
          value={formData.candidateName}
          onChange={handleInputChange}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "200px",
          }}
        />{" "}
        Son/daughter of Shri{" "}
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleInputChange}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "200px",
          }}
        />
        , resident{" "}
        <input
          type="text"
          name="residence"
          value={formData.residence}
          onChange={handleInputChange}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "100px",
          }}
        />{" "}
        of{" "}
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "150px",
          }}
        />{" "}
        Street,{" "}
        <input
          type="text"
          name="village"
          value={formData.village}
          onChange={handleInputChange}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "150px",
          }}
        />{" "}
        Village/Town/City,{" "}
        <input
          type="text"
          name="district"
          value={formData.district}
          onChange={handleInputChange}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "120px",
          }}
        />{" "}
        District,{" "}
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "120px",
          }}
        />{" "}
        State, hereby declare that I belong to the{" "}
        <input
          type="text"
          name="minorityCommunity"
          value={formData.minorityCommunity}
          onChange={handleInputChange}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "180px",
          }}
        />{" "}
        (indicate minority community notified by Central Government i.e.
        Muslim/Sikh/Christian/Buddhist/Parsi/Jain).
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <div>
          <p>
            Place:{" "}
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                width: "150px",
              }}
            />
          </p>
          <p>
            Date:{" "}
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                width: "150px",
              }}
            />
          </p>
        </div>

        <div style={{ textAlign: "right" }}>
          <p>Signature of the Candidate:</p>
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleInputChange}
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "200px",
              marginBottom: 10,
            }}
          />
          <p>Name of the Candidate:</p>
          <input
            type="text"
            name="nameAgain"
            value={formData.nameAgain}
            onChange={handleInputChange}
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "200px",
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "30px", fontSize: "14px" }}>
        <strong>Note:</strong> At the time of document verification, such
        candidates claiming waiver of examination fee will be required to
        furnish ‘Minority Community Declaration’ affidavit on Non Judicial Stamp
        paper that he/she belongs to any of the minority community notified by
        Central Government (i.e. Muslim/Sikh/Christian/Buddhist/Parsi/Jain).
      </div>
    </section>
  );
};

export default Footer;
