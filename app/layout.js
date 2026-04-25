import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Dev Shree Agro Seeds - Masterful Cultivation",
    template: "%s | Dev Shree Agro Seeds"
  },
  description: "Dev Shree Agro Seeds, founded by Devendra Palatiya, provides premium agricultural seeds for Kharif and Rabi seasons. High-yield, certified seeds for farmers in Madhya Pradesh and beyond.",
  keywords: ["Dev Shree Agro Seeds", "Devendra Palatiya", "agricultural seeds", "Soybean seeds", "Wheat seeds", "Gram seeds", "Mustard seeds", "Mung seeds", "highest yield seeds", "certified seeds India", "Madhya Pradesh agriculture", "Kharif seeds", "Rabi seeds"],
  authors: [{ name: "Devendra Palatiya", url: "https://devshreeagroseeds.com" }],
  creator: "Devendra Palatiya",
  publisher: "Dev Shree Agro Seeds",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Dev Shree Agro Seeds - Masterful Cultivation",
    description: "Premium agricultural seeds founded by Devendra Palatiya. High-yield certified variety seeds.",
    url: "https://devshreeagroseeds.com",
    siteName: "Dev Shree Agro Seeds",
    images: [
      {
        url: "/images/Logo.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/images/Logo.jpeg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/images/Logo.jpeg' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dev Shree Agro Seeds",
              "url": "https://devshreeagroseeds.com",
              "logo": "https://devshreeagroseeds.com/images/Logo.jpeg",
              "founder": {
                "@type": "Person",
                "name": "Devendra Palatiya"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shri Vrindavan Dham, Indore Bypass",
                "addressLocality": "Dewas",
                "addressRegion": "M.P.",
                "postalCode": "455001",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-83497-98177",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["Hindi", "English"]
              },
              "sameAs": [
                "https://wa.me/918349798177"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
