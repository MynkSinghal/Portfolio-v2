import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayank: Still Shipping Wild Ideas",
  description: "Mayank – Modern Tech Creator Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libreCaslonText.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
