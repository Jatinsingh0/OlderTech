"use client";

import React, { useState } from "react";
import styles from "./verifyPhone.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

const VerifyPhone = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter(); // Initialize the router

  // Email Validation Function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input change and validate email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
    setError("");
    setSuccess("");
  };

  // Function to send OTP
  const sendOTP = async () => {
    if (!isValid) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://older-tech-jatinsingh0s-projects.vercel.app/api/sendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("OTP has been sent to your email.");

        // Store email in localStorage
        localStorage.setItem('email', email);

        // Redirect to /VerifyOTP after 1 second
        setTimeout(() => {
          router.push("/VerifyOTP");
        }, 1000); // 1000ms = 1 second
      } else {
        setError(data.error || "Failed to send OTP. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Cross Icon */}
      <Link href="/SignUpDetails">
        <div className={styles.crossIcon}>
          <span>&#10005;</span>
        </div>
      </Link>

      {/* Verify Email Text */}
      <div className={styles.verifyText}>
        <p>Verify your Email</p>
      </div>

      {/* Input Field with Email Address */}
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@domain.com"
          className={styles.inputField}
          value={email}
          onChange={handleEmailChange}
        />
        {!isValid && email.length > 0 && (
          <p className={styles.errorText}>Please enter a valid email address.</p>
        )}
      </div>

      {/* Send OTP Button */}
      <div className={styles.buttonWrapper}>
        <button
          className={styles.sendOtpButton}
          disabled={!isValid || loading}
          onClick={sendOTP}
          style={{
            backgroundColor: isValid ? "#1A0D5F" : "#cccccc",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </div>

      {/* Success or Error Messages */}
      {success && <p className={styles.successText}>{success}</p>}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default VerifyPhone;
