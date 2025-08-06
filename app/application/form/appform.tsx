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
import amblem from "@/public/amblem.png";
import railLogo from "@/public/raillogo.gif";
import years from "@/public/years.jpg";
export const dynamic = "force-dynamic";

const Mainfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams?.get("token");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
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
  const [timer, setTimer] = useState(3);

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
      setOpen(true);
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
        {/* Header Image */}
        <div
          style={{
            width: "100%",
            padding: "1vw",
            boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            flexWrap: isMobile ? "wrap" : "nowrap",
          }}
        >
          {/* Left Logo */}
          <div
            style={{
              flex: "1 1 100px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Image
              src={railLogo}
              alt="Railway Logo"
              style={{
                width: "100%",
                maxWidth: "360px",
                objectFit: "contain",
                height: isMobile ? "60px" : "100px",
              }}
            />
          </div>

          {/* Right Logos */}
          <div
            style={{
              flex: "1 1 200px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: isMobile ? "20px" : "50px",
              flexWrap: "wrap",
            }}
          >
            <Image
              src={years}
              alt="Years"
              style={{
                width: "100%",
                maxWidth: isMobile ? "70px" : "100px",
                height: isMobile ? "60px" : "auto",
                objectFit: "contain",
              }}
            />
            <Image
              src={amblem}
              alt="Amblem"
              style={{
                width: "100%",
                maxWidth: isMobile ? "70px" : "100px",
                height: isMobile ? "60px" : "100px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div
          className="App"
          style={{
            padding: "4vw 5vw",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Header />
          <Signature formData={formData} setFormData={setFormData} />
          <Personal formData={formData} setFormData={setFormData} />
          <Contact formData={formData} setFormData={setFormData} />
          <Education formData={formData} setFormData={setFormData} />
          <Footer formData={formData} setFormData={setFormData} />

          {/* Submit Button */}
          <div
            style={{
              margin: "3rem 0 2rem",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              textAlign: "center",
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

        {/* Footer */}
        <footer
          style={{
            width: "100%",
            backgroundColor: "#003366",
            color: "white",
            fontSize: "0.85rem",
            textAlign: "center",
            padding: "1rem 5vw",
            boxSizing: "border-box",
          }}
        >
          © 2011 Centre For Railway Information Systems. All Rights Reserved.
        </footer>
      </div>

      {/* Modal on Submission */}
      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            maxWidth: "450px",
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
