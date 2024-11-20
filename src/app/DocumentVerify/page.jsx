"use client";

import React, { useState } from "react";
import styles from "./document.module.css";
import Link from "next/link";

const documentVerify = () => {
  const [documentImage, setDocumentImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocumentImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.container}>
      {/* Title Section */}
      <div className={styles.header}>
        <p className={styles.title}>IDENTITY VERIFICATION</p>
        <p className={styles.description}>
          UPLOAD ANY RELEVANT CONSTRUCTION AND SAFETY CERTIFICATIONS/QUALIFICATIONS
        </p>
      </div>

      {/* Upload Box Section */}
      <div className={styles.uploadContainer}>
        <div className={styles.uploadBox}>
          {documentImage ? (
            <img
              src={documentImage}
              alt="Document"
              className={styles.uploadedImage}
            />
          ) : (
            <p className={styles.uploadText}>Upload the document</p>
          )}
          <input
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleImageUpload}
          />
        </div>
      </div>

      {/* Instructions Section */}
      <p className={styles.instruction}>
        Please upload your driver's license or passport.
      </p>

      <Link href="/verifiedStatus" className={styles.nextButton}>
      <p>Next</p>
      </Link>
    </div>
  );
};

export default documentVerify;
