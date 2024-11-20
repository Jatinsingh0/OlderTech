import React from "react";
import styles from "./introduction.module.css"; 
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className={styles.container}>
      {/* Header Text */}
      <div className={styles.header}>
        <p className={styles.title}>A Virtual reality training platform</p>
        <p className={styles.description}>For construction workers</p>
      </div>

      {/* Image Section */}
      <div className={styles.imageSection}>
        <Image
          src="/introduction.png"
          alt="Training Platform"
          layout="responsive"
          width={800}
          height={800}
          className={styles.image}
        />
      </div>

      {/* Next Button */}
      <Link href="/DocumentVerify" className={styles.nextButton}>
        <p>Next</p>
      </Link>
    </div>
  );
};

export default Introduction;
