import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modos de renderizado",
  description: "Conociendo los modos de renderizado de Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Codigo HTML que necesite agregar de forma global */}
        {children}
      </body>
    </html>
  );
}
