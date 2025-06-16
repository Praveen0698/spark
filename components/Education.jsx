import React from "react";

const Education = ({ formData, setFormData }) => {
  const handleRowOnechange = (e) => {
    if (e.target.name === "uploadOne") {
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[0] = {
          ...updatedEntities[0],
          uploadOne: e.target.files[0],
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[0] = {
          ...updatedEntities[0],
          [name]: value,
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    }
  };
  const handleRowTwochange = (e) => {
    if (e.target.name === "uploadOne") {
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[1] = {
          ...updatedEntities[1],
          uploadOne: e.target.files[0],
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[1] = {
          ...updatedEntities[1],
          [name]: value,
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    }
  };

  const handleRowThreechange = (e) => {
    if (e.target.name === "uploadOne") {
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[2] = {
          ...updatedEntities[2],
          uploadOne: e.target.files[0],
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[2] = {
          ...updatedEntities[2],
          [name]: value,
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    }
  };
  const handleRowFourchange = (e) => {
    if (e.target.name === "uploadOne") {
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[3] = {
          ...updatedEntities[3],
          uploadOne: e.target.files[0],
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[3] = {
          ...updatedEntities[3],
          [name]: value,
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    }
  };
  const handleRowFivechange = (e) => {
    if (e.target.name === "uploadOne") {
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[4] = {
          ...updatedEntities[4],
          uploadOne: e.target.files[0],
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[4] = {
          ...updatedEntities[4],
          [name]: value,
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    }
  };
  const handleRowSixchange = (e) => {
    if (e.target.name === "uploadOne") {
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[5] = {
          ...updatedEntities[5],
          uploadOne: e.target.files[0],
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const updatedEntities = [...prevData.education];
        updatedEntities[5] = {
          ...updatedEntities[5],
          [name]: value,
        };
        return {
          ...prevData,
          education: updatedEntities,
        };
      });
    }
  };

  return (
    <section className="contact office">
      <h3>
        ANNEXURE-C: <span> Education Qualifications </span>
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Course Title </td>
            <td>Subject</td>
            <td>University / Board</td>
            <td>Institution</td>
            <td>CGPA / Percentage</td>
            <td>Reg No. & Year</td>
            <td>Documents</td>
          </tr>

          <tr>
            <td>
              <input
                type="text"
                name="courseTitle"
                value={formData.education[0]?.courseTitle}
                onChange={(e) => handleRowOnechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="subject"
                value={formData.education[0]?.subject}
                onChange={(e) => handleRowOnechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="universityBoard"
                value={formData.education[0]?.universityBoard}
                onChange={(e) => handleRowOnechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="institution"
                value={formData.education[0]?.institution}
                onChange={(e) => handleRowOnechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="cgpaPercentage"
                value={formData.education[0]?.cgpaPercentage}
                onChange={(e) => handleRowOnechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="regNoYear"
                value={formData.education[0]?.regNoYear}
                onChange={(e) => handleRowOnechange(e)}
              />
            </td>
            <td>
              <input
                type="file"
                name="uploadOne"
                onChange={(e) => handleRowOnechange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="courseTitle"
                value={formData.education[1]?.courseTitle}
                onChange={(e) => handleRowTwochange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="subject"
                value={formData.education[1]?.subject}
                onChange={(e) => handleRowTwochange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="universityBoard"
                value={formData.education[1]?.universityBoard}
                onChange={(e) => handleRowTwochange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="institution"
                value={formData.education[1]?.institution}
                onChange={(e) => handleRowTwochange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="cgpaPercentage"
                value={formData.education[1]?.cgpaPercentage}
                onChange={(e) => handleRowTwochange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="regNoYear"
                value={formData.education[1]?.regNoYear}
                onChange={(e) => handleRowTwochange(e)}
              />
            </td>
            <td>
              <input
                type="file"
                name="uploadOne"
                onChange={(e) => handleRowTwochange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="courseTitle"
                value={formData.education[2]?.courseTitle}
                onChange={(e) => handleRowThreechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="subject"
                value={formData.education[2]?.subject}
                onChange={(e) => handleRowThreechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="universityBoard"
                value={formData.education[2]?.universityBoard}
                onChange={(e) => handleRowThreechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="institution"
                value={formData.education[2]?.institution}
                onChange={(e) => handleRowThreechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="cgpaPercentage"
                value={formData.education[2]?.cgpaPercentage}
                onChange={(e) => handleRowThreechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="regNoYear"
                value={formData.education[2]?.regNoYear}
                onChange={(e) => handleRowThreechange(e)}
              />
            </td>
            <td>
              <input
                type="file"
                name="uploadOne"
                onChange={(e) => handleRowThreechange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="courseTitle"
                value={formData.education[3]?.courseTitle}
                onChange={(e) => handleRowFourchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="subject"
                value={formData.education[3]?.subject}
                onChange={(e) => handleRowFourchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="universityBoard"
                value={formData.education[3]?.universityBoard}
                onChange={(e) => handleRowFourchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="institution"
                value={formData.education[3]?.institution}
                onChange={(e) => handleRowFourchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="cgpaPercentage"
                value={formData.education[3]?.cgpaPercentage}
                onChange={(e) => handleRowFourchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="regNoYear"
                value={formData.education[3]?.regNoYear}
                onChange={(e) => handleRowFourchange(e)}
              />
            </td>
            <td>
              <input
                type="file"
                name="uploadOne"
                onChange={(e) => handleRowFourchange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="courseTitle"
                value={formData.education[4]?.courseTitle}
                onChange={(e) => handleRowFivechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="subject"
                value={formData.education[4]?.subject}
                onChange={(e) => handleRowFivechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="universityBoard"
                value={formData.education[4]?.universityBoard}
                onChange={(e) => handleRowFivechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="institution"
                value={formData.education[4]?.institution}
                onChange={(e) => handleRowFivechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="cgpaPercentage"
                value={formData.education[4]?.cgpaPercentage}
                onChange={(e) => handleRowFivechange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="regNoYear"
                value={formData.education[4]?.regNoYear}
                onChange={(e) => handleRowFivechange(e)}
              />
            </td>
            <td>
              <input
                type="file"
                name="uploadOne"
                onChange={(e) => handleRowFivechange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="courseTitle"
                value={formData.education[5]?.courseTitle}
                onChange={(e) => handleRowSixchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="subject"
                value={formData.education[5]?.subject}
                onChange={(e) => handleRowSixchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="universityBoard"
                value={formData.education[5]?.universityBoard}
                onChange={(e) => handleRowSixchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="institution"
                value={formData.education[5]?.institution}
                onChange={(e) => handleRowSixchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="cgpaPercentage"
                value={formData.education[5]?.cgpaPercentage}
                onChange={(e) => handleRowSixchange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="regNoYear"
                value={formData.education[5]?.regNoYear}
                onChange={(e) => handleRowSixchange(e)}
              />
            </td>
            <td>
              <input
                type="file"
                name="uploadOne"
                onChange={(e) => handleRowSixchange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
