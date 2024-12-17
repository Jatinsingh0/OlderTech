// Route handler for verifying OTP
export async function POST(req) {
    try {
      const { email, otp } = await req.json();
  
      if (!email || !otp) {
        return Response.json(
          { error: "Email and OTP are required" },
          { status: 400 }
        );
      }
  
      // Check if global.otpStore has been set
      if (!global.otpStore) {
        return Response.json(
          { error: "No OTP request found. Please request a new OTP." },
          { status: 400 }
        );
      }
  
      const { otp: storedOtp, email: storedEmail, timestamp } = global.otpStore;
  
      // Validate email, OTP, and expiration
      const isExpired = Date.now() - timestamp > 5 * 60 * 1000; // OTP expires in 5 minutes
  
      if (storedEmail !== email) {
        return Response.json(
          { error: "Email does not match the OTP request." },
          { status: 400 }
        );
      }
  
      if (isExpired) {
        return Response.json(
          { error: "OTP has expired. Please request a new one." },
          { status: 400 }
        );
      }
  
      if (storedOtp != otp) {
        return Response.json(
          { error: "Invalid OTP. Please try again." },
          { status: 400 }
        );
      }
  
      // OTP is valid, clear the OTP to prevent reuse
      global.otpStore = null;
  
      return Response.json({ message: "OTP verified successfully!" }, { status: 200 });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return Response.json({ error: "Failed to verify OTP" }, { status: 500 });
    }
  }
  