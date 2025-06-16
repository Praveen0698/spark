import React from "react";

const inputStyle = {
  border: "none",
  background: "transparent",
  outline: "none",
  width: "100%",
  padding: "4px 6px",
  fontSize: "14px",
};

const headingStyle = {
  fontSize: "16px",
  marginBottom: "4px",
  fontWeight: "bold",
};

const sectionStyle = {
  fontFamily: "serif",
  marginTop: "60px",
  pageBreakInside: "avoid",
};

const Education = ({ formData, setFormData }) => {
  const handleRowChange = (index, e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => {
      const updated = [...prevData.education];
      updated[index] = {
        ...updated[index],
        [name]: name === "uploadOne" ? files[0] : value,
      };
      return { ...prevData, education: updated };
    });
  };

  return (
    <section className="contact office" style={sectionStyle}>
      <h3 style={headingStyle}>
        ANNEXURE-C: Education Qualifications
      </h3>
      <table style={{ width: "100%", fontFamily: "serif", borderSpacing: "0 10px" }}>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Subject</th>
            <th>University / Board</th>
            <th>Institution</th>
            <th>CGPA / Percentage</th>
            <th>Reg No. & Year</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const row = formData.education[index] || {};
            return (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="courseTitle"
                    style={inputStyle}
                    value={row.courseTitle || ""}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="subject"
                    style={inputStyle}
                    value={row.subject || ""}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="universityBoard"
                    style={inputStyle}
                    value={row.universityBoard || ""}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="institution"
                    style={inputStyle}
                    value={row.institution || ""}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="cgpaPercentage"
                    style={inputStyle}
                    value={row.cgpaPercentage || ""}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="regNoYear"
                    style={inputStyle}
                    value={row.regNoYear || ""}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="file"
                    name="uploadOne"
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Education;
