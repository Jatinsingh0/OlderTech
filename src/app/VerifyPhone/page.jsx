"use client"

import React, { useState } from 'react';
import styles from './verifyPhone.module.css';
import Link from 'next/link';

const VerifyPhone = () => {
  const [phone, setPhone] = useState('');

  // Handle input change and ensure only 10 digits are entered
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      setPhone(value);
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

      {/* Verify Phone Number Text */}
      <div className={styles.verifyText}>
        <p>Verify your phone number</p>
      </div>

      {/* Input Field with Phone Number */}
      <div className={styles.inputGroup}>
        <label htmlFor="phone" className={styles.label}>Phone number</label>
        <input
          type="text"
          id="phone"
          placeholder="(+1) - 2432352232"
          className={styles.inputField}
          value={phone}
          onChange={handlePhoneChange}
          maxLength="10" // Limit to 10 characters
        />
      </div>

      {/* Send OTP Button */}
      <div className={styles.buttonWrapper}>
        <Link href="/VerifyOTP">
          <button className={styles.sendOtpButton}>Send OTP</button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyPhone;
