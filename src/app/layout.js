import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "OlderTech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
