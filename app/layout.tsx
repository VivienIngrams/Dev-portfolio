import "./globals.css";
import { PT_Sans, Playfair_Display, Bodoni_Moda } from "next/font/google";
import { Navbar } from "./components/Navbar";

const pt = PT_Sans({
  weight: ["400"],
  variable: "--font-pt-sans",
  subsets: ["latin"],
});
const moda = Bodoni_Moda({
  weight: ["400"],
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  weight: ["400"],
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vivien Ingrams",
  description: "Frontend web developper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen ${moda.variable} ${pt.variable} ${playfair.variable}`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
