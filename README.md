# Email Functionality in Next.js

This section explains the email functionality implemented in the Next.js project, specifically for **OTP verification**.

## Overview

The email functionality is built using **Nodemailer** in the backend, integrated with **Next.js API routes**. The purpose is to send an OTP (One-Time Password) to the user's email during the verification process.

## Key Steps

1. **Nodemailer Setup**  
   - Nodemailer is used to send emails from the backend API route. It connects to an SMTP server and sends the OTP to the user's email.
   - We set up a secure SMTP connection in the API route handler to send the email.

2. **Sending OTP**  
   - When the user requests an OTP, an API route (`/api/send-otp`) triggers the email sending process.
   - The OTP is generated and sent as an email message to the user's registered email.

3. **API Route in Next.js**  
   - An API route (`/api/verify-otp`) handles the OTP verification.  
   - The email is retrieved from `localStorage`, and the OTP entered by the user is verified against the stored OTP.

4. **Successful OTP Verification**  
   - Once the OTP is successfully verified, the user is redirected to a success page.
   - A confirmation message is shown, indicating the OTP was verified successfully.

## Files Involved

- **API Route**: `/pages/api/verify-otp.js`  
   - This file contains the logic for verifying the OTP sent to the user.

- **Client-side Code**:  
   - The `VerifyOTP` component handles the OTP input and calls the API to verify the OTP.