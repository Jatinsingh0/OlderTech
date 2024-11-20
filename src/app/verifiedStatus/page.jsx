import React from 'react';
import styles from "./verified.module.css";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Payment Success",
  description: "This is a payment success page.",
};
const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.successLogo}>
            <Image
              src="/status.png"
              alt=""
              fill
              className={styles.success}
            />
          </div>

          <div>
            <p className={styles.heading}>Identity Verified</p>
            <p className={styles.subHeading}>by XYZ company</p>
          </div>

          <div className={styles.planDetails}>
          <div className={styles.planDetails1}>
            <p>Employer name</p>
            <p>Date of joining</p>
            <p>Verification date</p>
            <p>Person verified by</p>
          </div>
          <div className={styles.planDetails2}>
            <p>XYZ company</p>
            <p>26-08-2024</p>
            <p>13-09-2024</p>
            <p>Anne SD</p>
          </div>
        </div>
        
        <Link href={"/login"}>
        <button type="button" className={styles.button2}>
        Go to the profile
        </button>
        </Link>
    </div>
  )
}

export default page