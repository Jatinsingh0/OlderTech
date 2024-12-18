import React from 'react';
import styles from "./login.module.css";
import Link from 'next/link';

const login = () => {
  return (
    <div className={styles.container}>
  {/* Header Section */}
  <div className={styles.header}>
    <p className={styles.title}>Welcome Back!</p>
    <p className={styles.loginPrompt}>
      Don’t have an account? <Link href="/SignUp"><span className={styles.loginLink}>SignUp</span></Link>
    </p>
  </div>

  {/* Form Section */}
  <div className={styles.formWrapper}>
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          id="email"
          placeholder="Johndoe@gmail.com"
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="text"
          id="password"
          placeholder="************"
          className={styles.inputField}
        />
      </div>
      <button type="submit" className={styles.SignUpButton}>Login</button>
    </form>

    {/* Divider Section */}
    <div className={styles.divider}>
      <span className={styles.line}></span>
      <p className={styles.dividerText}>or Login using</p>
      <span className={styles.line}></span>
    </div>
    {/* Social Media Icons */}
    <div className={styles.socialMedia}>
      <img
        src="/instagram.svg"
        alt="Instagram"
        className={styles.socialIcon}
      />
      <img
        src="/google.svg"
        alt="Google"
        className={styles.socialIcon}
      />
      <img
        src="facebook.svg"
        alt="Facebook"
        className={styles.socialIcon}
      />
    </div>

    {/* Forgot Password */}
    <Link href="/ForgetPassword">
    <div className={styles.forgotPassword}>
      Forgot your Password?
    </div>
    </Link>
  </div>
</div>

  );
};

export default login;
