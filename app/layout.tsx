import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumffy",
  description: "Sumffy -- Your Activity help mate!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
