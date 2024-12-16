"use client"
import React, { useState } from 'react';
import styles from './signUpDetails.module.css';
import { useRouter } from 'next/navigation';

const SignupDetails = () => {
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required.';
    }
    if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be valid (e.g., +1234567890).';
    }
    if (!formData.terms) {
      newErrors.terms = 'You must agree to the Terms and Privacy Policy.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If valid, navigate to the next step
      router.push('/VerifyPhone');
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

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
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Address Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="address" className={styles.label}>Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className={styles.inputField}
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className={styles.error}>{errors.address}</p>}
          </div>

          {/* Phone Number Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>Phone number</label>
            <input
              type="text"
              id="phone"
              placeholder="+1-2432352232"
              className={styles.inputField}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>

          {/* Terms and Privacy Checkbox */}
          <div className={styles.termsContainer}>
            <input
              type="checkbox"
              id="terms"
              className={styles.checkbox}
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms" className={styles.termsLabel}>
              I’m agree with Terms and Privacy Policy
            </label>
          </div>
          {errors.terms && <p className={styles.error}>{errors.terms}</p>}

          {/* Submit Button */}
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>
              Next →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupDetails;
