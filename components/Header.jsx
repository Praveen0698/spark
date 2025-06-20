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
          INDIAN RAILWAYS – EASTERN DIVISION  
          <br />
          RECRUITMENT & JOINING APPLICATION FORM
        </h2>
      </div>

      <div
        className="header-instruction"
        style={{ fontSize: "15px", lineHeight: "1.8", textAlign: "justify" }}
      >
        <p>
          <strong>Important Notice to New Recruits:</strong>  
          Welcome to the Indian Railways – Eastern Division. This official document is to be duly completed by all individuals joining the service as part of the initial appointment process. The purpose of this form is to affirm your acceptance of duties, facilitate identity verification, and record your consent to the rules and standards upheld by Indian Railways.
        </p>

        <p>
          You are required to furnish accurate personal, academic, and professional details. Please ensure that all relevant supporting documents are self-attested and attached, including proof of age, educational qualifications, caste/community certificate (if applicable), experience records (if any), and a valid government-issued photo ID.
        </p>

        <p>
          This form must be submitted without delay to your designated Reporting Officer or Station Head upon your first day of joining. Following verification, your appointment will be officially endorsed and countersigned by the appropriate Railway Authority. A unique Employee Identification Number (EIN) will be generated and communicated to you. Kindly quote this number in all future railway correspondence.
        </p>

        <p>
          Suppression of facts, misrepresentation, or failure to comply with joining instructions may invite disciplinary proceedings, including revocation of appointment. We urge all candidates to thoroughly review the Indian Railways Recruitment Manual, available on the Eastern Division’s internal portal, and adhere to all procedural and conduct-based expectations.
        </p>

        <p>
          By signing and submitting this declaration form, you affirm that the information provided is true and complete to the best of your knowledge. You also agree to abide by the Code of Conduct, Railway Service Rules, and the guiding principles of Indian Railways throughout the term of your service.
        </p>
      </div>
    </section>
  );
};

export default Header;
