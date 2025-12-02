import ContactPage from "../components/ContactPage";
import FooterPage from "../components/FooterPage";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Contact | Kashish Gupta – VFX Artist",
  description:
    "Get in touch with VFX Artist Kashish Gupta for Roto, Paint, Cleanup, Keying, and Compositing projects. Available for freelance, studio work, and remote VFX assignments.",
  keywords: [
    "contact VFX artist",
    "hire roto paint artist",
    "VFX freelance contact",
    "VFX artist email",
    "compositing artist contact",
    "VFX portfolio contact"
  ],
  openGraph: {
    title: "Contact | Kashish Gupta – VFX Artist",
    description:
      "Reach out to hire or collaborate with VFX artist Kashish Gupta. Skilled in Roto, Paint, Cleanup, and Compositing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact VFX Artist"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | VFX Artist Kashish Gupta",
    description:
      "Contact professional VFX Artist for Roto, Paint, and Cleanup work.",
    images: ["/og-image.jpg"]
  },
};


export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <ContactPage />
      <div className="h-0.5  bg-gray-500 "></div>
      <FooterPage></FooterPage>
    </div>
  );
}
