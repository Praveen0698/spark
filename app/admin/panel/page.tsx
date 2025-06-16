"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface CustomJwtPayload {
  userType: string;
}

export default function AdminPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams?.get("accesstoken");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    companyName: "",
    address: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError("");
    setFormData({
      userName: "",
      password: "",
      companyName: "",
      address: "",
    });
  };
  const handleTableOpen = () => setOpenTable(true);
  const handleTableClose = () => setOpenTable(false);

  const handleInputChange = (e: any) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (!accessToken) {
      router.push("/admin");
      return;
    }
    const userType = jwtDecode<CustomJwtPayload>(accessToken)?.userType;
    if (userType !== "admin") {
      router.push("/admin");
    }
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/user/create`, formData);

      if (res.data === "failure") {
        setError("** User already exist");
      } else {
        handleClose();
        getUser();
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const [getUserData, setGetUserData] = useState([]);
  const [getFormData, setGetFormData] = useState([]);

  const getUser = async () => {
    const res = await axios.get(`/api/user/getall`);
    setGetUserData(res.data);
  };

  const getForm = async () => {
    const res = await axios.get(`/api/form/getall`);
    setGetFormData(res.data);
  };

  useEffect(() => {
    getUser();
    getForm();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getFormData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(getFormData.length / itemsPerPage);

  return (
    <>
      <header className="panel">
        <h1>Admin Panel</h1>
        <div className="header-button">
          <button id="logout-btn" onClick={handleOpen}>
            Register
          </button>
          <button id="logout-btn" onClick={handleTableOpen}>
            View
          </button>
          <button id="logout-btn" onClick={() => router.push("/admin")}>
            Logout
          </button>
        </div>

        {/* Modal for Register */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ ...modalStyle(400) }}>
            <Button
              onClick={handleClose}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              X
            </Button>
            <Typography variant="h6">LOGIN CREDENTIALS</Typography>
            <form>
              <TextField
                fullWidth
                label="Username"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                sx={{ my: 1 }}
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                sx={{ my: 1 }}
              />
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                sx={{ my: 1 }}
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                sx={{ my: 1 }}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button
                fullWidth
                onClick={handleSave}
                sx={{ mt: 2, bgcolor: "green", color: "white" }}
              >
                {loading ? "Creating..." : "Create"}
              </Button>
            </form>
          </Box>
        </Modal>

        {/* Modal for View */}
        <Modal open={openTable} onClose={handleTableClose}>
          <Box sx={{ ...modalStyle(600) }}>
            <Button
              onClick={handleTableClose}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              X
            </Button>
            <Typography variant="h6">User Details</Typography>
            <div style={{ height: 250, overflowY: "scroll" }}>
              <table width="100%" border={1} cellPadding={5} cellSpacing={0}>
                <thead>
                  <tr style={{ background: "#333", color: "#fff" }}>
                    <th>Sl No</th>
                    <th>Company Name</th>
                    <th>User Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getUserData?.map((item: any, i: number) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.companyName}</td>
                      <td>{item.username}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Box>
        </Modal>
      </header>

      {/* Table Content */}
      <div>
        {getFormData.length > 0 ? (
          <table width="100%" border={1} cellPadding={5} cellSpacing={0}>
            <thead>
              <tr style={{ background: "#333", color: "#fff" }}>
                <th>Sl No</th>
                <th>Candidate Name</th>
                <th>Date Of Birth</th>
                <th>State</th>
                <th>Declaration Date</th>
                <th>Declaration Name</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item: any, i: number) => (
                <tr key={i}>
                  <td>{i + indexOfFirstItem + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.dob}</td>
                  <td>{item.state}</td>
                  <td>{item.declarationDate}</td>
                  <td>{item.declarationName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: "center", paddingTop: 80 }}>
            <p>No data available</p>
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <div>
            Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
          </div>
        </div>
      </div>
    </>
  );
}

const modalStyle = (width: number) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
});
