
import nodemailer from "nodemailer";

// Route handler for sending OTP
export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate a 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Store OTP and its expiration timestamp in memory
    // Example: use a global object or similar approach
    global.otpStore = {
      otp,
      email,
      timestamp: Date.now(),
    };

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
    });

    console.log(`OTP sent to ${email}: ${otp}`); // Debugging purposes

    // Return success response
    return Response.json(
      { message: "OTP sent successfully!", otp }, // `otp` included for testing purposes
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    return Response.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}


