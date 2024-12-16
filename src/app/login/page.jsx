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
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
        alt="Facebook"
        className={styles.socialIcon}
      />
      <img
        src="/instagram.png"
        alt="Instagram"
        className={styles.socialIcon}
      />
      <img
        src="/google.png"
        alt="Google"
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
