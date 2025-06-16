import React from "react";

const Personal = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    if (e.target.name === "addressProof") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else if (e.target.name === "panCardFile") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <section className="personal office">
      <h3>
        ANNEXURE-A: <span> Personal Details </span>
      </h3>
      <p>(To be filled up by the prospective employee) </p>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td colSpan={3}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Sex</td>
            <td>
              <input
                type="text"
                name="sex"
                value={formData.sex}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Name of Father</td>
            <td colSpan={3}>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Name of Mother</td>
            <td colSpan={3}>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>State</td>
            <td>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Caste</td>
            <td>
              <input
                type="text"
                name="caste"
                value={formData.caste}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Religion</td>
            <td>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              Category <br />
              General/ SC/ST/OBC/OEC
            </td>
            <td>
              <input
                type="text"
                name="casteCategory"
                value={formData.casteCategory}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              Whether physically <br />
              handicapped (yes or no)
            </td>
            <td>
              <input
                type="text"
                name="physicallyHandicapped"
                value={formData.physicallyHandicapped}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              Whether ex-servicemen? <br /> (yes or no)
            </td>
            <td>
              <input
                type="text"
                name="exServicemen"
                value={formData.exServicemen}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>PAN Number</td>
            <td>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Voter ID Card Number</td>
            <td>
              <input
                type="text"
                name="voterId"
                value={formData.voterId}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Ration Card Number</td>
            <td>
              <input
                type="text"
                name="rationCardNo"
                value={formData.rationCardNo}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Identifications marks of the prospective employee</td>
            <td>
              1.{" "}
              <input
                type="text"
                name="identificationOne"
                value={formData.identificationOne}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              2.{" "}
              <input
                type="text"
                name="identificationTwo"
                value={formData.identificationTwo}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              3.{" "}
              <input
                type="text"
                name="identificationThree"
                value={formData.identificationThree}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Height</td>
            <td>
              <input
                type="text"
                name="height"
                value={formData.height}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              Marital status <br />
              (unmarried/married/divorced)
            </td>
            <td>
              <input
                type="text"
                name="martialStatus"
                value={formData.martialStatus}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Spouse’s Name</td>
            <td colSpan={3}>
              <input
                type="text"
                name="spouseName"
                value={formData.spouseName}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Spouse’s religion</td>
            <td>
              <input
                type="text"
                name="spouseReligion"
                value={formData.spouseReligion}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Spouse’s caste</td>
            <td>
              <input
                type="text"
                name="spouseCaste"
                value={formData.spouseCaste}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              Whether inter religion/caste <br />
              marriage (yes/no)
            </td>
            <td>
              <input
                type="text"
                name="interReligionCaste"
                value={formData.interReligionCaste}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Whether spouse is employed</td>
            <td>
              <input
                type="text"
                name="spouseEmployeed"
                value={formData.spouseEmployeed}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>
              Spouse employed in <br /> (specify organization)
            </td>
            <td colSpan={3}>
              <input
                type="text"
                name="spouseEmployeedIn"
                value={formData.spouseEmployeedIn}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Address Proof Upload</td>
            <td>
              <input
                type="file"
                name="addressProof"
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Pan Card Upload</td>
            <td>
              <input
                type="file"
                name="panCardFile"
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Personal;
