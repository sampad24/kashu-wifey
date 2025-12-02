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
  title: "Kashish Gupta | VFX Artist Portfolio | Roto • Paint • Compositing",
  description:
    "I am Kashish Gupta, a professional VFX artist specializing in Roto, Paint, Compositing, Green Screen, and Cleanup. Skilled in Nuke, After Effects, and Silhouette. Explore my portfolio and latest projects.",
    
  keywords: [
    "VFX Artist",
    "Roto Artist",
    "Paint Artist",
    "Compositing",
    "VFX Portfolio",
    "Nuke Artist",
    "After Effects Artist",
    "Silhouette Artist",
    "Cleanup Artist",
    "Green Screen Removal",
    "VFX Showreel",
    "Roto and Paint",
  ],

  authors: [{ name: "Kashish Gupta" }],
  creator: "Kashish Gupta",
  publisher: "Kashish Gupta",
  robots: "index, follow",

  openGraph: {
    title: "Kashish Gupta | VFX Artist Portfolio",
    description:
      "Professional VFX Artist Portfolio — Roto, Paint, Compositing, Nuke, Silhouette, After Effects.",
    url: "",
    siteName: "Kashish Gupta Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kashish Gupta VFX Portfolio",
      },
    ],
    type: "website",
  },

  alternates: {
    canonical: "",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kashish Gupta",
              jobTitle: "VFX Artist",
              url: "",
              sameAs: [
                "https://www.instagram.com/gud_vibes.1x/",
                "https://www.linkedin.com/in/kashish-gupta-vfx-artist-b7535a391/",
              ],
              description:
                "Professional VFX Artist specializing in Roto, Paint, and Compositing.",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

