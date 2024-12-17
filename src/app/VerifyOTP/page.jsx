"use client";
import React, { useState } from "react";
import styles from "./verifyOTP.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState(''); // To show error messages
  const [loading, setLoading] = useState(false); // To indicate loading state
  const [successMessage, setSuccessMessage] = useState(''); // To hold success message
  const router = useRouter();
  const email = localStorage.getItem('email'); // Get the email from localStorage

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value.slice(0, 1); // Only allow 1 digit
    setOtp(newOtp);

    // Focus on next input field automatically after entering a digit
    if (e.target.value.length === 1 && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle OTP Verification
  const handleVerifyOtp = async () => {
    setLoading(true);
    const otpCode = otp.join(""); // Join OTP digits

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpCode }), // Pass email and OTP
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("OTP verified successfully!"); // Set success message
        setTimeout(() => {
          router.push("/EmailVerifyStatus"); // Redirect after 1 second
        }, 1000); // Delay for 1 second
      } else {
        setError(data.error || "OTP verification failed.");
      }
    } catch (error) {
      // Log only the error message, not complex objects
      setError("Error verifying OTP: " + (error.message || error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/VerifyPhone">
        <div className={styles.crossIcon}>
          <span>&larr;</span>
        </div>
      </Link>

      {/* Verify OTP Text */}
      <div className={styles.verifyText}>
        <p>Verify OTP</p>
      </div>

      {/* OTP Input Boxes */}
      <div className={styles.otpContainer}>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleOtpChange(e, index)}
            maxLength="1"
            className={styles.otpInput}
          />
        ))}
      </div>

      {/* Success Message */}
      {successMessage && <p className={styles.successText}>{successMessage}</p>}

      {/* Error Message */}
      {error && <p className={styles.errorText}>{error}</p>}

      {/* Didn't receive code? Resend */}
      <div className={styles.resendWrapper}>
        <p className={styles.resendText}>
          Didn't receive code? <span className={styles.resendLink}>Resend</span>
        </p>
      </div>

      {/* Verify OTP Button */}
      <div className={styles.buttonWrapper}>
        <button
          className={styles.sendOtpButton}
          onClick={handleVerifyOtp}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;
