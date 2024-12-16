import localFont from "next/font/local";
import "./globals.css";

// Define Co Headline fonts
const coHeadlineRegular = localFont({
  src: "./fonts/Co-headline.woff",
  variable: "--font-co-headline-regular",
});

const coHeadlineLight = localFont({
  src: "./fonts/Co-headline-Light.woff",
  variable: "--font-co-headline-light",
});

const coHeadlineBold = localFont({
  src: "./fonts/Co-headline-Bold.woff",
  variable: "--font-co-headline-bold",
});

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
