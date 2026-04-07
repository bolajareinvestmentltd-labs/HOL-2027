import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Engr. Olufemi Sanni | Kwara Ti Wa Ni",
  description: "Kwara Ti Wa Ni - A people-centered vision for a greater Kwara. Join Engr. Olufemi Sanni (ARABA) in building a better future.",
  openGraph: {
    title: "Engr. Olufemi Sanni | Kwara Ti Wa Ni",
    description: "A people-centered vision for a greater Kwara",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
