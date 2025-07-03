import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/shared/organisms/Header";
import Footer from "@/components/shared/organisms/Footer";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const bitcountGridDouble = localFont({
  src: "../../public/fonts/bitcount-grid-double/regular.ttf",
  variable: "--font-bitcount",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Parvizi",
  description: "Ali Parvizi's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${bitcountGridDouble.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
