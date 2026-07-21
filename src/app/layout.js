import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import CircuitBackground from "@/components/CircuitBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "CovianLab | Tech, Marketing, and Data Solutions",
  description:
    "CovianLab crafts high-performance digital ecosystems for the next generation of business leaders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${manrope.variable} bg-surface text-on-surface font-body relative min-h-screen overflow-x-hidden`}
      >
        {/* Global Digital Circuit Background */}
        <CircuitBackground />

        {/* Global Application Pages */}
        {children}
      </body>
    </html>
  );
}