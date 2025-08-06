"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import railway from "@/public/railway.png";

const LoginUser = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [hasMounted, setHasMounted] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captcha: "",
  });

    const generateCaptcha = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptchaCode(randomCode);
  };

  useEffect(() => {
    setHasMounted(true);
    generateCaptcha();
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasMounted) return null; // ✅ Prevent hydration errors



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
    } catch {
      setError("** Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loginBoxWidth =
    screenWidth >= 1024
      ? "33%"
      : screenWidth >= 768
      ? "60%"
      : "90%";

  const headerHeight = screenWidth <= 768 ? "100px" : "160px"; // Responsive image height

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Login Form */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "90%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0 0 1rem 0.4rem #ccc",
            width: loginBoxWidth,
            padding: "1rem",
            marginTop: "2rem",
            height: "fit-content",
            border: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src={railway}
            alt="REC Logo"
            style={{
              width: "8rem",
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
          <h2
            style={{
              textAlign: "center",
              color: "#00529B",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              fontSize: "1.125rem",
            }}
          >
            Please Enter Login Details
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <input
              type="text"
              name="username"
              placeholder="User id"
              value={formData.username}
              onChange={handleInputChange}
              style={inputStyle}
              required
              inputMode="text"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              style={inputStyle}
              required
              inputMode="text"
            />

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <input
                type="text"
                name="captcha"
                placeholder="Enter Security Code"
                value={formData.captcha}
                onChange={handleInputChange}
                style={{ ...inputStyle, flex: 1, minWidth: "120px" }}
                required
                inputMode="numeric"
              />
              <div
                style={{
                  backgroundColor: "#e5e7eb",
                  color: "black",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  whiteSpace: "nowrap",
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

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          backgroundColor: "#00529B",
          color: "white",
          fontSize: "0.75rem",
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        Copyright © 2011 Centre For Railway Information Systems. All Rights
        Reserved.
      </footer>
    </div>
  );
};

// ✅ Styled Inputs - fontSize 16px to prevent mobile zoom
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.5rem 1rem",
  border: "1px solid #d1d5db",
  fontSize: "16px", // Prevents zoom on mobile input focus
  borderRadius: "0.375rem",
  outline: "none",
  height: "40px",
  margin: 0,
  boxSizing: "border-box",
};

// ✅ Button Style
const submitButtonStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#00529B",
  color: "white",
  fontWeight: 600,
  padding: "0.5rem 0",
  fontSize: "16px", // Also 16px to avoid zoom on iOS
  borderRadius: "0.375rem",
  cursor: "pointer",
  border: "none",
  transition: "background-color 0.3s",
};

export default LoginUser;
