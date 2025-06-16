"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.5rem 1rem",
  border: "1px solid #d1d5db",
  fontSize: "0.875rem",
  borderRadius: "0.375rem",
  outline: "none",
  height: "40px",
  margin: "10px 0",
};

const submitButtonStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#00529B",
  color: "white",
  fontWeight: 600,
  padding: "0.5rem 0",
  fontSize: "0.875rem",
  borderRadius: "0.375rem",
  cursor: "pointer",
  border: "none",
  transition: "background-color 0.3s",
};

const formContainerStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "400px",
  margin: "100px auto",
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "0.5rem",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const titleStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "1.5rem",
  fontSize: "1.5rem",
  color: "#333",
};

const errorTextStyle: React.CSSProperties = {
  color: "red",
  fontSize: "0.85rem",
  textAlign: "center",
  marginBottom: "1rem",
};

export default function LoginAdmin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/admin/login", formData);

      if (res.data === "failure") {
        setError("** Wrong Username or Password");
      } else {
        router.push(`/admin/panel?accesstoken=${res.data.accessToken}`);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={titleStyle}>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={formData.username}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleInputChange}
          style={inputStyle}
        />
        {error && <div style={errorTextStyle}>{error}</div>}
        <button type="submit" style={submitButtonStyle}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
