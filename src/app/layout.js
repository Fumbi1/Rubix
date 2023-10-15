import Nav from "./nav/page";
import Footer from "./footer/page";
import "./globals.css";

export const metadata = {
  title: "Rubix | Interior Design Firm",
  description: "Welcome to Rubix's Firm!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
