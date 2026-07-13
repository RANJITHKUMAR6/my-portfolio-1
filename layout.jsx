import "./globals.css";

export const metadata = {
  title: "Ranjith Kumar S | Salesforce Developer · Python Engineer · AI/ML",
  description:
    "Personal portfolio of Ranjith Kumar S — B.Tech IT graduate specializing in Salesforce Development (Apex, LWC), Python Engineering, and AI/ML. IEEE IConIC 2025 published researcher.",
  keywords: [
    "Ranjith Kumar",
    "Salesforce Developer",
    "Python Engineer",
    "AI ML Engineer",
    "LWC",
    "Apex",
    "TensorFlow",
    "OpenCV",
    "Tamil Nadu",
    "portfolio",
  ],
  authors: [{ name: "Ranjith Kumar S" }],
  robots: "index, follow",
  openGraph: {
    title: "Ranjith Kumar S | Salesforce · Python · AI/ML",
    description:
      "Building AI-powered solutions and Salesforce applications. IEEE IConIC 2025 published researcher.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ranjith Kumar S | Portfolio",
    description: "Salesforce Developer · Python Engineer · AI/ML Engineer",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
