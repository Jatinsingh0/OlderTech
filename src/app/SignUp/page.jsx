"use client"
import React, { useState } from 'react';
import styles from "./signUp.module.css"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      router.push('/SignUpDetails');
    }
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <p className={styles.title}>SignUp</p>
        <p className={styles.loginPrompt}>
          Already have an Account? <Link href="/login"><span className={styles.loginLink}>Login</span></Link>
        </p>
      </div>

      {/* Form Section */}
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className={styles.inputField}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Johndoe@gmail.com"
              className={styles.inputField}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="************"
              className={styles.inputField}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className={styles.errorText}>{errors.password}</p>}
          </div>
          <button type="submit" className={styles.SignUpButton}>Sign Up</button>
        </form>

        {/* Divider Section */}
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <p className={styles.dividerText}>or signup using</p>
          <span className={styles.line}></span>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialMedia}>
          <img
            src="instagram.svg"
            alt="instagram"
            className={styles.socialIcon}
          />
          <img
            src="/google.svg"
            alt="google"
            className={styles.socialIcon}
          />
          <img
            src="/facebook.svg"
            alt="facebook"
            className={styles.socialIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
