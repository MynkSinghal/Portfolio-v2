import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://www.mayanksinghal.tech"),
  title: "Mayank: Still Shipping Wild Ideas",
  description: "Mayank – Modern Tech Creator Portfolio",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Mayank: Still Shipping Wild Ideas",
    description: "Mayank – Modern Tech Creator Portfolio",
    url: "https://www.mayanksinghal.tech",
    siteName: "Mayank Singhal",
    type: "website",
    images: [
      {
        url: "https://www.mayanksinghal.tech/banner.png",
        width: 1200,
        height: 630,
        alt: "Mayank Singhal - Building useful things with code and curiosity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank: Still Shipping Wild Ideas",
    description: "Mayank – Modern Tech Creator Portfolio",
    images: ["https://www.mayanksinghal.tech/banner.png"],
    creator: "@mayanksinghal_",
    site: "@mayanksinghal_",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libreCaslonText.variable}`}>
      <head>
        {/* Additional Meta Tags for Global Sharing */}
        <meta property="og:image" content="https://www.mayanksinghal.tech/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="https://www.mayanksinghal.tech/banner.png" />
        <meta name="twitter:image:alt" content="Mayank Singhal - Building useful things with code and curiosity" />
        <meta property="og:url" content="https://www.mayanksinghal.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mayank: Still Shipping Wild Ideas" />
        <meta property="og:description" content="Mayank – Modern Tech Creator Portfolio" />
        <meta property="og:site_name" content="Mayank Singhal" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PV683G9X');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PV683G9X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}
