"use client";

import React, { useState } from "react";
import styles from "./IDVerification.module.css";
import Link from "next/link";

const IdentityVerification = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.container}>
      {/* Title Section */}
      <div className={styles.header}>
        <p className={styles.title}>IDENTITY VERIFICATION</p>
        <p className={styles.description}>
          Uploading government-issued IDs and safety certifications.
        </p>
      </div>

      {/* Upload Boxes Section */}
      <div className={styles.uploadContainer}>
        <div className={styles.uploadBox}>
          {frontImage ? (
            <img
              src={frontImage}
              alt="Front ID"
              className={styles.uploadedImage}
            />
          ) : (
            <p className={styles.uploadText}>Front ID</p>
          )}
          <input
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={(e) => handleImageUpload(e, setFrontImage)}
          />
        </div>

        <div className={styles.uploadBox}>
          {backImage ? (
            <img
              src={backImage}
              alt="Back ID"
              className={styles.uploadedImage}
            />
          ) : (
            <p className={styles.uploadText}>Back ID</p>
          )}
          <input
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={(e) => handleImageUpload(e, setBackImage)}
          />
        </div>
      </div>

      {/* Instructions Section */}
      <p className={styles.instruction}>
        Please upload your driver's license or passport.
      </p>

      <Link href="/DocumentVerify" className={styles.nextButton}>
        <p>Next</p>
      </Link>
    </div>
  );
};

export default IdentityVerification;
