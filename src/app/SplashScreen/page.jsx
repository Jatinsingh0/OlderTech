import React from "react";
import styles from "./splash.module.css";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/olderTech.png" 
          alt="Splash Image"
          layout="intrinsic"
          width={300}
          height={500}
          className={styles.splashImage}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
