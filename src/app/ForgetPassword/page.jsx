import React from 'react';
import styles from "./forgetPass.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <p className={styles.title}>Forgot Password</p>
        <p className={styles.loginPrompt}>
          Enter your email address to reset your password
        </p>
      </div>

      {/* Form Section */}
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={styles.inputField}
            />
          </div>
          <button type="submit" className={styles.SignUpButton}>Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
