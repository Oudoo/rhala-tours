import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JournalProvider } from "@/context/JournalContext";
import { BookingProvider } from "@/context/BookingContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "RHALA | Modern Earthy Travel",
  description: "Experience the soul of Egypt with RHALA.",
  icons: {
    icon: '/R Logo Icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <BookingProvider>
          <JournalProvider>
            <Navbar />
            <main>{children}</main>
            <WhatsAppButton />
            <Footer />
          </JournalProvider>
        </BookingProvider>
      </body>
    </html>
  );
}
