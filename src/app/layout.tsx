import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JournalProvider } from "@/context/JournalContext";
import { BookingProvider } from "@/context/BookingContext";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
      <body className={`${montserrat.variable} antialiased font-sans`}>
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
