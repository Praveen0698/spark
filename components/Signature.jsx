import React, { useRef, useState } from "react";

const Signature = ({ formData, setFormData }) => {
  const [photoSrc, setPhotoSrc] = useState("");
  const [signOneSrc, setSignOneSrc] = useState("");
  const [signTwoSrc, setSignTwoSrc] = useState("");

  const fileSignOneRef = useRef(null);

  const handleSignOneClick = () => {
    fileSignOneRef.current.click();
  };
  const fileSignTwoRef = useRef(null);

  const handleSignTwoClick = () => {
    fileSignTwoRef.current.click();
  };
  const filePhotoRef = useRef(null);

  const handlePhotoClick = () => {
    filePhotoRef.current.click();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  return (
    <section className="signature">
      <div className="specimen">
        <div className="specimen-signature">
          <p>Specimen Signature</p>
          <p>Specimen Signature</p>
        </div>
        <div>
          <p className="signature-guide">Signature shall not touch the lines</p>
        </div>
        <div className="signature-file">
          <div className="drop-area" onClick={handleSignOneClick}>
            <input
              type="file"
              name="signOne"
              onChange={(e) => {
                handleInputChange(e);
                const reader = new FileReader();

                reader.onload = (e) => {
                  setSignOneSrc(e.target.result);
                };

                reader.readAsDataURL(e.target.files[0]);
              }}
              style={{ display: "none" }}
              ref={fileSignOneRef}
            />
            {signOneSrc ? (
              <img
                src={signOneSrc}
                alt="Uploaded"
                style={{
                  width: "200px",
                  height: "50px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            ) : (
              <div className="upload-text">Upload</div>
            )}
          </div>

          <div className="drop-area" onClick={handleSignTwoClick}>
            <input
              type="file"
              name="signTwo"
              onChange={(e) => {
                handleInputChange(e);
                const reader = new FileReader();

                reader.onload = (e) => {
                  setSignTwoSrc(e.target.result);
                };

                reader.readAsDataURL(e.target.files[0]);
              }}
              style={{ display: "none" }}
              ref={fileSignTwoRef}
            />
            {signTwoSrc ? (
              <img
                src={signTwoSrc}
                alt="Uploaded"
                style={{
                  width: "200px",
                  height: "50px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            ) : (
              <div className="upload-text">Upload</div>
            )}
          </div>
        </div>
      </div>
      <div className="image">
        <div className="img-drop-area drop-area" onClick={handlePhotoClick}>
          <input
            type="file"
            name="photo"
            onChange={(e) => {
              handleInputChange(e);
              const reader = new FileReader();

              reader.onload = (e) => {
                setPhotoSrc(e.target.result);
              };

              reader.readAsDataURL(e.target.files[0]);
            }}
            style={{ display: "none" }}
            ref={filePhotoRef}
          />
          {photoSrc ? (
            <img
              src={photoSrc}
              alt="Uploaded"
              style={{
                width: "100px",
                height: "120px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          ) : (
            <div className="upload-text affix-text">
              Affix a recently taken passport size photo
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Signature;
