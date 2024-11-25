"use client"
import React, { useState } from 'react';
import styles from './verifyOTP.module.css';
import Link from 'next/link';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

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

  return (
    <div className={styles.container}>
      <Link href="/verifyPhone">
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

      {/* Didn't receive code? Resend */}
      <div className={styles.resendWrapper}>
        <p className={styles.resendText}>
          Didn't receive code? <span className={styles.resendLink}>Resend</span>
        </p>
      </div>

      {/* Verify OTP Button */}
      <div className={styles.buttonWrapper}>
        <Link href="/emailVerify">
          <button className={styles.sendOtpButton}>Verify OTP</button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyOTP;
