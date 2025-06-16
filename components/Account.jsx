import React from "react";
import "../app/globals.css";

const Account = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="contact office" style={{ marginTop: "50px" }}>
      <h3>
        ANNEXURE-F: <span> Account Details </span>
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Account Number </td>
            <td colSpan={3}>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>Bank Name</td>
            <td colSpan={3}>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>IFSC Code</td>
            <td colSpan={3}>
              <input
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Account Holder Name</td>
            <td colSpan={3}>
              <input
                type="text"
                name="accountHolder"
                value={formData.accountHolder}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Account;
