import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdul Azeez Abdullah — Polymer Technologist",
    template: "%s — Abdul Azeez Abdullah",
  },
  description:
    "Modern, research-focused portfolio of Abdul Azeez Abdullah, Polymer Technologist based in Sri Lanka.",
  applicationName: "Abdul Azeez Abdullah Portfolio",
  keywords: [
    "Abdul Azeez Abdullah",
    "Polymer Technologist",
    "Sri Lanka",
    "Polymer Processing",
    "Elastomers",
    "Rubber Technology",
    "Materials Science",
    "Research",
  ],
  authors: [{ name: "Abdul Azeez Abdullah" }],
  creator: "Abdul Azeez Abdullah",
  openGraph: {
    title: "Abdul Azeez Abdullah — Polymer Technologist",
    description:
      "Modern, research-focused portfolio of Abdul Azeez Abdullah, Polymer Technologist based in Sri Lanka.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
