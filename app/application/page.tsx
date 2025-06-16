"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Signature from "@/components/Signature";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import axios from "axios";
import { Button, Modal, Box, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { baseUrl } from "@/constant/baseurl";
import Image from "next/image";
import headerimg from "@/public/headerimg.png";
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

  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (accessToken) {
      const tokenData = jwtDecode<any>(accessToken);
      setBgColor(tokenData?.colorPicker || "");
      setText(tokenData?.companyName || "");
      setAddress(tokenData?.address || "");
      setTextColor(tokenData?.colorText || "");
      setFile(tokenData?.file || "");
    } else {
      router.push("/");
    }
  }, [accessToken]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await axios.post(`${baseUrl}/application-form`, formData);
      handleOpen();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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

          <div className="buttons-cont">
            <button className="submit-btn" onClick={handleSave}>
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

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Form Submitted Successfully</Typography>
          </Box>
          <Button
            style={{
              color: "white",
              backgroundColor: "green",
              marginTop: "10px",
            }}
            onClick={handleClose}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Mainfile;
