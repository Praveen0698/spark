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
import headerimg from "@/public/headerrail.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const dynamic = "force-dynamic";

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
      <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        <div
          style={{
            width: "100%",
            maxHeight: "160px",
            overflow: "hidden",
            padding:"0.5rem",
            boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.3)", // bottom shadow
            backgroundColor: "#fff", // optional for better contrast
          }}
        >
          <Image
            src={headerimg}
            alt="Railway Logo"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>

        <div className="App" style={{ padding: "1.5rem 3rem" }}>
          <Header />
          <Signature formData={formData} setFormData={setFormData} />
          <Personal formData={formData} setFormData={setFormData} />
          <Contact formData={formData} setFormData={setFormData} />
          <Education formData={formData} setFormData={setFormData} />
          <Footer formData={formData} setFormData={setFormData} />

          <div
            style={{
              margin: "3rem 0 2rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleSave}
              disabled={loading}
              style={{
                backgroundColor: "#0078D7",
                color: "#fff",
                padding: "0.9rem 2.5rem",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.backgroundColor = "#005fbf";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "#0078D7";
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        {/* <div style={{ backgroundColor: bgColor, padding: "0.5rem 0" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.9rem",
              color: textColor,
              margin: 0,
            }}
          >
            {address}
          </p>
        </div> */}

        <footer
          style={{
            width: "100%",
            backgroundColor: "#003366",
            color: "white",
            fontSize: "0.85rem",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          © 2011 Centre For Railway Information Systems. All Rights Reserved.
        </footer>
      </div>

      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 450,
            bgcolor: "#ffffff",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          <CheckCircleIcon sx={{ color: "#2e7d32", fontSize: 48, mb: 1 }} />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 1, color: "#2e7d32" }}
          >
            Form Submitted Successfully!
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            Redirecting to login page in <strong>{timer}</strong> second
            {timer !== 1 ? "s" : ""}...
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Mainfile;
