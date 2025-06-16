"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // use 'next/router' for pages/ directory
import { baseUrl } from "@/constant/baseurl"; // adjust this path as per your structure
import bdl from "@/public/bdl.png";
import Image from "next/image";
const LoginUser = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captcha: "",
  });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptchaCode(randomCode);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.captcha !== captchaCode) {
      setError("** Invalid security code. Please try again.");
      generateCaptcha();
      return;
    }

    setLoading(true);

    try {
      const result = await axios.post(`/api/user/login`, {
        username: formData.username,
        password: formData.password,
      });

      if (result.data === "failure") {
        setError("** Wrong Username or Password");
        generateCaptcha();
      } else {
        router.push(`/application?token=${result.data.accessToken}`);
      }
    } catch (err) {
      setLoading(false);
      setError("** Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundImage:
        //   "url('https://res.cloudinary.com/dzjuhiwxw/image/upload/f_auto,q_auto/v1/samples/zthveamo9qq8myeeuhws')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "90%",
          padding: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0 0 1rem 0.4rem #ccc",
            width: "33%",
            padding: "1rem",
            marginTop: "2.5rem",
            height: "fit-content",
            border: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src={bdl}
            alt="REC Logo"
            style={{
              width: "12rem",
              alignSelf: "center",
            }}
          />
          <h2
            style={{
              textAlign: "center",
              color: "#00529B",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              fontSize: "1.25rem",
            }}
          >
            Please Enter Login Details
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <input
              type="text"
              name="username"
              placeholder="Email/Mobile No."
              value={formData.username}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />

            <div
              style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
            >
              <input
                type="text"
                name="captcha"
                placeholder="Enter Security Code"
                value={formData.captcha}
                onChange={handleInputChange}
                style={{ ...inputStyle, flex: 1 }}
                required
              />
              <div
                style={{
                  backgroundColor: "#e5e7eb",
                  color: "black",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "1.125rem",
                  padding: "0.25rem 1rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                }}
              >
                {captchaCode}
              </div>
            </div>

            {error && (
              <p style={{ color: "#dc2626", fontSize: "0.875rem" }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={submitButtonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#003f7d")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#00529B")
              }
            >
              {loading ? "Signing in..." : "SIGN IN"}
            </button>
          </form>
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
        Dynamics Limited, A Government of India Enterprise, Ministry of Defence.
      </footer>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.5rem 1rem",
  border: "1px solid #d1d5db",
  fontSize: "0.875rem",
  borderRadius: "0.375rem",
  outline: "none",
  height: "40px",
  margin: 0,
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

export default LoginUser;
