"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  // Array of image sources for each module
  const images = ["/T1.png", "/T2.png", "/T3.png", "/T4.png"];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerIcons}>
          <div className={styles.menuIcon}>
            <img src="/menuIcon.png" alt="User" className={styles.userIcon} />
          </div>
          <img src="/user.png" alt="User" className={styles.userIcon} />
        </div>
        <div className={styles.headerText}>
          <p className={styles.welcome}>Welcome Simon</p>
          <p className={styles.description}>Here is your training modules</p>
        </div>
      </div>

      {/* Training Modules */}
      <div className={styles.moduleContainer}>
        {["Training 1", "Training 2", "Training 3", "Training 4"].map(
          (title, index) => (
            <div
              key={index}
              className={`${styles.moduleBox} ${styles[`box${index + 1}`]}`}
            >
              <div className={styles.moduleLeft}>
                <img
                  src={images[index]} // Dynamically set the image source
                  alt="Icon"
                  className={styles.moduleIcon}
                />
                <p className={styles.moduleTitle}>{title}</p>
              </div>
              <div className={styles.moduleRight}>
                <p className={styles.viewAll}>View all training modules ↗</p>
                <p className={styles.completed}>{`Completed ${
                  10 * (index + 1)
                }%`}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
