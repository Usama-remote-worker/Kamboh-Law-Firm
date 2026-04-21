import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { generateStructuredData } from '@/lib/seo';
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} - Tax & Regulatory Excellence in Pakistan`,
  },
  description: "Expert tax filing, business registration, SEPC incorporation and financial strategic advisory. Serving Pakistan's Elite Professionals since 2008.",
  keywords: ["tax filing Lahore", "NTN registration", "SECP incorporation", "FBR filers", "GST calculator"],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="canonical" href="https://kambohassociates.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData("Organization", {
              name: SITE_NAME,
              url: "https://kambohassociates.com",
              logo: "https://kambohassociates.com/logo.png",
              sameAs: ["https://twitter.com", "https://linkedin.com"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
