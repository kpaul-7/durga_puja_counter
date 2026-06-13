import { ReactNode } from "react";
import "./globals.css";
export const metadata = {
  title: "Durga Puja 2026 | The Grand Countdown",
  description:
    "The ultimate countdown for Durga Puja 2026. Celebrating the biggest festival with schedules, dhak sounds, and festive vibes. Crafted by Koushik Paul.",
  keywords:
    "durga puja, kolkata, durga puja 2026 countdown, festival, bengali, dhak, mahalaya, koushik paul, koushik paul portfolio",
  
  authors: [{ name: "Koushik Paul", url: "https://kpaul-7.github.io/portfolio/" }],
  creator: "Koushik Paul",
  publisher: "Koushik Paul",

  openGraph: {
    title: "Durga Puja Countdown 2026",
    description:
      "Maa is coming. Check the schedule and countdown for Durga Puja 2026. Built by Koushik Paul.",
    type: "website",
    url: "https://kpaul-7.github.io/portfolio/", 
    siteName: "Durga Puja 2026 Countdown",
  },

  twitter: {
    card: "summary_large_image",
    title: "Durga Puja 2026 | The Grand Countdown",
    description: "Maa is coming. Check the schedule and countdown for Durga Puja 2026. Crafted by Koushik Paul.",
    creator: "@K_paul7", 
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Hind_Siliguri'] antialiased bg-red-50">
        {children}
      </body>
    </html>
  );
}
