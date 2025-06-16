import React from "react";

const Header = () => {
  return (
    <section className="header" style={{ padding: "20px 30px" }}>
      <div
        className="header-title"
        style={{ textAlign: "center", marginBottom: "25px" }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginTop: "20px",
            textDecoration: "underline",
          }}
        >
          RECRUITMENT & APPLICATION REPORT FORM
        </h2>
      </div>

      <div
        className="header-instruction"
        style={{ fontSize: "15px", lineHeight: "1.8", textAlign: "justify" }}
      >
        <p>
          <strong>Note to Candidate:</strong> This official document is to be
          completed by all employees joining Bharat Dynamics Limited (BDL) as
          part of their initial appointment formalities. The purpose of this
          report is to establish a formal record of the new recruit’s acceptance
          of duties, identity verification, and agreement to the terms and
          conditions of employment as mandated by BDL’s Human Resources
          Department.
        </p>

        <p>
          The form must be duly filled in with accurate personal, academic, and
          professional details. It is the responsibility of the employee to
          attach self-attested copies of supporting documents such as proof of
          date of birth, academic certificates, caste category (if applicable),
          prior employment proof, and government-issued ID.
        </p>

        <p>
          This form is to be submitted to the Reporting Officer/Unit Head
          immediately upon joining. Post verification, the Appointing Authority
          shall endorse the form with official remarks and counter-signature.
          The HR Section will then issue a Permanent Employee Number (PEN),
          which must be quoted in all future official correspondence.
        </p>

        <p>
          Any misleading information or suppression of facts may result in
          disciplinary action, including cancellation of the appointment. The
          candidate is advised to read the Recruitment Policy of BDL available
          on the company intranet and comply with all procedures as directed
          from time to time.
        </p>

        <p>
          By signing and submitting this form, the employee confirms the
          accuracy of the provided information and agrees to be governed by the
          service rules, ethics, conduct guidelines, and code of employment of
          Bharat Dynamics Limited throughout the duration of service.
        </p>
      </div>
    </section>
  );
};

export default Header;
