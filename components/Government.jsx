import React from "react";

const Government = () => {
  return (
    <section className="contact office">
      <h3>
        ANNEXURE-E:{" "}
        <span> IF ALREADY WORKING IN GOVERNMENT, GIVE DETAILS </span>
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Department</td>
            <td>
              <input type="text" />
            </td>
            <td>Designation</td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>Relieving Order No.</td>
            <td>
              <input type="text" />
            </td>
            <td>Relieving Order Date</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Office last worked </td>
            <td>
              <input type="text" />
            </td>
            <td>Earlier Recruiting agency</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Earlier Advice Memo No</td>
            <td>
              <input type="text" />
            </td>
            <td>Earlier Advice Memo Date</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Earlier Appointment Order No.</td>
            <td>
              <input type="text" />
            </td>
            <td>Earlier Appointment Order Date</td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Government;
