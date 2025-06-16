import React from "react";

const Contact = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="contact office" style={{ marginTop: "120px" }}>
      <h3>
        ANNEXURE-B: <span> Contact Details </span>
      </h3>
      <table>
        <tbody>
          <tr>
            <td colSpan={2} style={{ textAlign: "center", fontWeight: "700" }}>
              Present Address
            </td>
            <td colSpan={2} style={{ textAlign: "center", fontWeight: "700" }}>
              Permanent Address
            </td>
          </tr>
          <tr>
            <td>House No. and Name</td>
            <td>
              <input
                type="text"
                name="presentHouseName"
                value={formData.presentHouseName}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>House No. and Name</td>
            <td>
              <input
                type="text"
                name="permanentHouseName"
                value={formData.permanentHouseName}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>Street Name</td>
            <td>
              <input
                type="text"
                name="presentStreetName"
                value={formData.presentStreetName}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Street Name</td>
            <td>
              <input
                type="text"
                name="permanentStreetName"
                value={formData.permanentStreetName}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Place</td>
            <td>
              <input
                type="text"
                name="presentPlace"
                value={formData.presentPlace}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Place</td>
            <td>
              <input
                type="text"
                name="permanentPlace"
                value={formData.permanentPlace}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Pin</td>
            <td>
              <input
                type="text"
                name="presentPin"
                value={formData.presentPin}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Pin</td>
            <td>
              <input
                type="text"
                name="permanentPin"
                value={formData.permanentPin}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>State</td>
            <td>
              <input
                type="text"
                name="presentState"
                value={formData.presentState}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>State</td>
            <td>
              <input
                type="text"
                name="permanentState"
                value={formData.permanentState}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>District</td>
            <td>
              <input
                type="text"
                name="presentDistrict"
                value={formData.presentDistrict}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>District</td>
            <td>
              <input
                type="text"
                name="permanentDistrict"
                value={formData.permanentDistrict}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Taluk</td>
            <td>
              <input
                type="text"
                name="presentTaluk"
                value={formData.presentTaluk}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Taluk</td>
            <td>
              <input
                type="text"
                name="permanentTaluk"
                value={formData.permanentTaluk}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Village</td>
            <td>
              <input
                type="text"
                name="presentVillage"
                value={formData.presentVillage}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Village</td>
            <td>
              <input
                type="text"
                name="permanentVillage"
                value={formData.permanentVillage}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Phone No.</td>
            <td>
              <input
                type="text"
                name="presentPhoneNo"
                value={formData.presentPhoneNo}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Phone No.</td>
            <td>
              <input
                type="text"
                name="permanentPhoneNo"
                value={formData.permanentPhoneNo}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Home Town</td>
            <td>
              <input
                type="text"
                name="presentHomeTown"
                value={formData.presentHomeTown}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Home Town </td>
            <td>
              <input
                type="text"
                name="permanentHomeTown"
                value={formData.permanentHomeTown}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Email address </td>
            <td>
              <input
                type="text"
                name="presentEmail"
                value={formData.presentEmail}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Email address </td>
            <td>
              <input
                type="text"
                name="permanentEmail"
                value={formData.permanentEmail}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Contact;
