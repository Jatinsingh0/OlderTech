import React from 'react';
import styles from './signUpDetails.module.css';
import Link from 'next/link';

const signupdetails = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <p className={styles.title}>Complete the details</p>
        <p className={styles.loginPrompt}>
          Already have an Account? <span className={styles.loginLink}>Login</span>
        </p>
      </div>

      {/* Form Section */}
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="address" className={styles.label}>Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>Phone number</label>
            <input
              type="text"
              id="phone"
              placeholder="+1-2432352232"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="companyName" className={styles.label}>Company name</label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter your company name"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="employeeNumber" className={styles.label}>Employee number</label>
            <input
              type="text"
              id="employeeNumber"
              placeholder="52332–4445456–65"
              className={styles.inputField}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Link href="/verifyphone">
              <button type="submit" className={styles.submitButton}>Next →</button>
            </Link>
          </div>
          
          <div className={styles.termsContainer}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label htmlFor="terms" className={styles.termsLabel}>
              I’m agree with Terms and Privacy Policy
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signupdetails;
