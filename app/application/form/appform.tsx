"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Signature from "@/components/Signature";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { Modal, Box, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import headerimg from "@/public/headerimg.png";

export const dynamic = 'force-dynamic';

const Mainfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams?.get("token");

  const [formData, setFormData] = useState({
    photo: "",
    signOne: "",
    signTwo: "",
    officeEmployeeCode: "",
    officeDepartment: "",
    officeOffice: "",
    name: "",
    dob: "",
    sex: "",
    fatherName: "",
    motherName: "",
    nationality: "",
    state: "",
    caste: "",
    religion: "",
    casteCategory: "",
    physicallyHandicapped: "",
    exServicemen: "",
    panNumber: "",
    voterId: "",
    rationCardNo: "",
    identificationOne: "",
    identificationTwo: "",
    identificationThree: "",
    height: "",
    martialStatus: "",
    spouseName: "",
    spouseReligion: "",
    spouseCaste: "",
    interReligionCaste: "",
    spouseEmployeed: "",
    spouseEmployeedIn: "",
    addressProof: "",
    panCardFile: "",
    presentHouseName: "",
    presentStreetName: "",
    presentPlace: "",
    presentPin: "",
    presentState: "",
    presentDistrict: "",
    presentTaluk: "",
    presentVillage: "",
    presentPhoneNo: "",
    presentHomeTown: "",
    presentEmail: "",
    permanentHouseName: "",
    permanentStreetName: "",
    permanentPlace: "",
    permanentPin: "",
    permanentState: "",
    permanentDistrict: "",
    permanentTaluk: "",
    permanentVillage: "",
    permanentPhoneNo: "",
    permanentHomeTown: "",
    permanentEmail: "",
    source: "",
    generalRecruitment: "",
    method: "",
    scaleOfPay: "",
    adviceMemo: "",
    adviceMemoDate: "",
    districtRecruitment: "",
    ifDistrictRecruitment: "",
    serialNoAdviceMemo: "",
    entryCategory: "",
    appointmentOrder: "",
    appointmentOrderDate: "",
    education: [
      {
        courseTitle: "",
        subject: "",
        universityBoard: "",
        institution: "",
        cgpaPercentage: "",
        regNoYear: "",
        uploadOne: "",
      },
    ],
    accountNumber: "",
    bankName: "",
    ifscCode: "",
    accountHolder: "",
    declarationStation: "",
    declarationDate: "",
    declarationName: "",
    declarationSignature: "",
  });

  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(3); // countdown state

  type TokenData = {
    colorPicker?: string;
    address?: string;
    colorText?: string;
  };

  useEffect(() => {
    if (accessToken) {
      const tokenData = jwtDecode<TokenData>(accessToken);
      setBgColor(tokenData?.colorPicker || "");
      setAddress(tokenData?.address || "");
      setTextColor(tokenData?.colorText || "");
    } else {
      router.push("/");
    }
  }, [accessToken, router]);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setOpen(true); // open modal
      setLoading(false);
      startRedirectTimer();
    }, 1500);
  };

  const startRedirectTimer = () => {
    let count = 3;
    setTimer(count);
    const interval = setInterval(() => {
      count -= 1;
      setTimer(count);
      if (count <= 0) {
        clearInterval(interval);
        router.push("/");
      }
    }, 1000);
  };

  return (
    <>
      <div className="fullpage" style={{ background: "#fdfdfd" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <Image
            src={headerimg}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="App">
          <Header />
          <Signature formData={formData} setFormData={setFormData} />
          <Personal formData={formData} setFormData={setFormData} />
          <Contact formData={formData} setFormData={setFormData} />
          <Education formData={formData} setFormData={setFormData} />
          <Footer formData={formData} setFormData={setFormData} />

          <div
            className="buttons-cont"
            style={{ margin: "2rem 0", textAlign: "center" }}
          >
            <button
              className="submit-btn"
              onClick={handleSave}
              style={{
                backgroundColor: "#00529B",
                color: "#fff",
                padding: "0.75rem 2rem",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#00529B")
              }
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        <div className="footer" style={{ backgroundColor: bgColor }}>
          <div className="full-col"></div>
          <div
            className="full-color"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{ fontSize: "0.8rem", color: textColor, marginBottom: 0 }}
            >
              {address}
            </p>
          </div>
        </div>
        <footer
          style={{
            width: "100%",
            height: "10%",
            backgroundColor: "#00529B",
            color: "white",
            fontSize: "0.75rem",
            textAlign: "center",
            padding: "1rem 0",
          }}
        >
          Copyright © 2025 - All Rights Reserved. Official Website of Bharat
          Dynamics Limited, A Government of India Enterprise, Ministry of
          Defence.
        </footer>
      </div>

      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#2e7d32" }}
          >
            ✅ Form Submitted Successfully!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your application form has been submitted. Redirecting to login page
            in <strong>{timer}</strong> second{timer !== 1 ? "s" : ""}...
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Mainfile;
