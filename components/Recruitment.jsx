import React from "react";

const Recruitment = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="contact office">
      <h3>
        ANNEXURE-D: <span> Recruitment Details </span>
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Source (PSC or other agency) </td>
            <td>
              <input
                type="text"
                name="source"
                value={formData.source}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              Type <br />
              (General or Special recruitment)
            </td>
            <td>
              <input
                type="text"
                name="generalRecruitment"
                value={formData.generalRecruitment}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>
              Method <br />
              (Direct/ By transfer)
            </td>
            <td>
              <input
                type="text"
                name="method"
                value={formData.method}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Scale of Pay</td>
            <td>
              <input
                type="text"
                name="scaleOfPay"
                value={formData.scaleOfPay}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Advice Memo No.</td>
            <td>
              <input
                type="text"
                name="adviceMemo"
                value={formData.adviceMemo}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Advice Memo date</td>
            <td>
              <input
                type="text"
                name="adviceMemoDate"
                value={formData.adviceMemoDate}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Is recruitment (Y/N)</td>
            <td>
              <input
                type="text"
                name="districtRecruitment"
                value={formData.districtRecruitment}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              If recruitment <br />
              specify the Department
            </td>
            <td>
              <input
                type="text"
                name="ifDistrictRecruitment"
                value={formData.ifDistrictRecruitment}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Serial No. in the advice memo</td>
            <td>
              <input
                type="text"
                name="serialNoAdviceMemo"
                value={formData.serialNoAdviceMemo}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Entry category</td>
            <td>
              <input
                type="text"
                name="entryCategory"
                value={formData.entryCategory}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Appointment Order No. </td>
            <td>
              <input
                type="text"
                name="appointmentOrder"
                value={formData.appointmentOrder}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>Appointment Order date</td>
            <td>
              <input
                type="text"
                name="appointmentOrderDate"
                value={formData.appointmentOrderDate}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Recruitment;
