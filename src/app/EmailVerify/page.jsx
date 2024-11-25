import React from "react";
import styles from "./emailVerify.module.css";
import Link from "next/link";

const emailVerify = () => {
  return (
    <div className={styles.container}>
      {/* Arrow at Top Left */}
      <Link href="/">
        <span className={styles.leftArrow}>&larr;</span>
      </Link>

      <div className={styles.titleWrapper}>
        <p className={styles.title}>Account Verification</p>
      </div>

      <div className={styles.content}>
        {/* Image Section */}
        <div className={styles.imageWrapper}>
          <img
            src="/usafety.png"
            alt="Account Verification"
            className={styles.image}
          />
        </div>

        {/* Text Section */}
        <div className={styles.textSection}>
          <p>
            We have sent you an email to verify your account. Please check and
            confirm the details.
          </p>
        </div>

        <div className={styles.buttonWrapper}>
          <Link href="/emailVerifyStatus">
            <button className={styles.checkStatusButton}>
              Check the Status
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default emailVerify;
