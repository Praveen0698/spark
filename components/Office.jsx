import React from "react";

const Office = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="office">
      <h3>
        ANNEXURE-A <span> (For Office use) </span>
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Employee Code</td>
            <td colSpan={3}>
              <input
                type="text"
                name="officeEmployeeCode"
                value={formData.officeEmployeeCode}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Department</td>
            <td>
              <input
                type="text"
                name="officeDepartment"
                value={formData.officeDepartment}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Office</td>
            <td>
              <input
                type="text"
                name="officeOffice"
                value={formData.officeOffice}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Office;
