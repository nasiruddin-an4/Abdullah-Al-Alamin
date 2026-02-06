import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export const metadata = {
  title: "Abdullah Al Alamin",
  description:
    "Head of Brand & Communication | FMCG & Building Materials Expert | 13 Years Leadership | Business Growth Strategist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
