import React, { useEffect, useState } from "react";

const getResponsiveFontSize = () => (window.innerWidth < 768 ? "12px" : "14px");
const getResponsiveHeading = () => (window.innerWidth < 768 ? "14px" : "16px");

const inputBaseStyle = {
  border: "none",
  background: "transparent",
  outline: "none",
  width: "100%",
  padding: "4px 6px",
};

const headingBaseStyle = {
  marginBottom: "4px",
  fontWeight: "bold",
};

const sectionStyle = {
  fontFamily: "serif",
  marginTop: "60px",
  pageBreakInside: "avoid",
};

const tableWrapperStyle = {
  overflowX: "auto",
  padding:"10px 0"
};

const tableStyle = {
  width: "100%",
  fontFamily: "serif",
  borderSpacing: "0 10px",
  minWidth: "700px", // ensures horizontal scroll on small screens
};

const Education = ({ formData, setFormData }) => {
  const [fontSize, setFontSize] = useState(getResponsiveFontSize());
  const [headingFontSize, setHeadingFontSize] = useState(getResponsiveHeading());

  const handleResize = () => {
    setFontSize(getResponsiveFontSize());
    setHeadingFontSize(getResponsiveHeading());
  };

  useEffect(() => {
    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inputStyle = {
    ...inputBaseStyle,
    fontSize,
  };

  const headingStyle = {
    ...headingBaseStyle,
    fontSize: headingFontSize,
  };

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
      <h3 style={headingStyle}>ANNEXURE-C: Education Qualifications</h3>
      <div style={tableWrapperStyle}>
        <table style={tableStyle}>
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
      </div>
    </section>
  );
};

export default Education;
