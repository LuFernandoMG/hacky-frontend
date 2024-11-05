import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/Header"; // Importar el Header
import Nav from "../components/Nav";
import "./globals.css";
import '@smastrom/react-rating/style.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hacky",
  description: "Aprende haciendo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header /> {/* Insertamos el Header aquí */}
        <div className="content-wrapper">
          <Nav /> {/* Insertamos el Header aquí */}
          {children}
        </div>
      </body>
    </html>
  );
}
