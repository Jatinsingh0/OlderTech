import React from "react";
import styles from "./splash.module.css";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className={styles.container}>
      {/* Image Section */}
      <Image
        src="/usafety.png" 
        alt="Splash Image"
        layout="intrinsic"
        width={500}
        height={500}
        className={styles.splashImage}
      />
    </div>
  );
};

export default SplashScreen;
