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
      <body>
        {children}
        {/* Floating WhatsApp Action: Artisanal Style */}
        <a 
          href="https://wa.me/918349798177" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-10 right-10 max-[768px]:bottom-6 max-[768px]:right-6 bg-primary text-white w-[70px] h-[70px] max-[768px]:w-[60px] max-[768px]:h-[60px] flex items-center justify-center shadow-2xl z-[999] border-2 border-secondary transition-transform hover:scale-110 active:scale-95"
          aria-label="Connect on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="max-[768px]:w-[24px] max-[768px]:h-[24px]">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-2.1 4.6z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
