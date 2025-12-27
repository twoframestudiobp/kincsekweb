
// Import React to resolve 'Cannot find namespace React' on line 19
import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kincsek Művészeti Klub | Gyermekfoglalkozások és Néptánc Budapesten",
  description: "Kincsek Művészeti Klub Budapest szívében. Néptánc, érzelmi intelligencia fejlesztés és kreatív kézműves foglalkozások gyermekeknek.",
  openGraph: {
    title: "Kincsek Művészeti Klub | A Jövő Hagyománya",
    description: "Csatlakozz te is a kincskeresőkhöz! Néptánc és kreatív művészeti foglalkozások Budapesten.",
    images: ["https://picsum.photos/seed/kincsek-seo/1200/630"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  // Fix: Added React import to define the React namespace for ReactNode
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="blob-bg bg-red-400 w-96 h-96 top-0 -left-20"></div>
        <div className="blob-bg bg-teal-400 w-96 h-96 bottom-0 -right-20"></div>
        {children}
      </body>
    </html>
  );
}
