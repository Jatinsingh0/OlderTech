import React from 'react';
import styles from './emailVerifyStatus.module.css';
import Link from 'next/link';

const emailVerifyStatus = () => {
  return (
    <div className={styles.container}>
      {/* Arrow at Top Left */}
      <Link href="/">
        <span className={styles.leftArrow}>&larr;</span>
      </Link>

      {/* Title at Top Center */}
      <div className={styles.titleWrapper}>
        <p className={styles.title}>Account verified</p>
      </div>

      {/* Main Content Section */}
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
          Your account has been verified!
          Welcome to  U Safety!
          </p>
        </div>

        {/* Check Status Button */}
        <div className={styles.buttonWrapper}>
           <Link href="/idVerification">
           <button className={styles.checkStatusButton}>Next step :  Identity Verfication</button>
           </Link>
         </div>
      </div>
    </div>
  );
};

export default emailVerifyStatus;
