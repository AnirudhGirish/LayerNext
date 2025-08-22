import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Layer Next | Premium Interior Design Studio",
  description:
    "Layer Next transforms spaces with elegance, precision, and elevation. We blend timeless aesthetics with innovative engineering to create interiors that inspire, function, and endure.",
  keywords: [
    "interior design",
    "luxury interiors",
    "modern interiors",
    "premium design studio",
    "Layer Next",
    "home decor",
    "interior architecture",
    "timeless design",
    "interiors",
    "design"
  ],
  authors: [{ name: "Layer Next" }],
  openGraph: {
    title: "Layer Next | Premium Interior Design Studio",
    description:
      "From vision to reality, Layer Next crafts interiors with elegance, precision, and elevation.",
    url: "https://layernext.com", // replace with your actual domain
    siteName: "Layer Next",
    images: [
      {
        url: "/image2.png",
        width: 1200,
        height: 630,
        alt: "Layer Next Interior Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layer Next | Premium Interior Design Studio",
    description:
      "Timeless aesthetics, innovative engineering, and modern craftsmanship shaping interiors that inspire.",
    images: ["/image.jpg"],
    creator: "@layernext",
  },
  robots: {
  index: true,
  follow: true,
  googleBot: {
    
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

  metadataBase: new URL("https://layernext.com"), // replace with your domain
  alternates: {
    canonical: "https://layernext.com",
  },
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
