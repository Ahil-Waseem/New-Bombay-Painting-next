  import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ NAVBAR LINKS (VERY IMPORTANT) */
const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    dropdown: [
      {
        name: "All Painting Services",
        path: "/services/painting-services-mumbai",
      },
      {
        name: "Interior Painting",
        path: "/services/interior-painting",
      },
      {
        name: "Exterior Painting",
        path: "/services/exterior-painting",
      },
      {
        name: "Texture Painting",
        path: "/services/texture-painting",
      },
      {
        name: "POP & False Ceiling",
        path: "/services/pop-false-ceiling",
      },
      {
        name: "Wallpaper Installation",
        path: "/services/wallpaper-installation",
      },
      {
        name: "Home Renovation",
        path: "/services/home-renovation",
      },
      {
        name: "Wood Polish",
        path: "/services/wood-polish",
      },{
        name: "Wood Polish Lamination",
        path: "/services/wood-polish-lamination",
      },

    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Rates", path: "/painting-rates-mumbai"}
];


export const metadata: Metadata = {
  title: "New Bombay Painting | Professional Painting Services",
  description:
    "New Bombay Painting offers professional interior, exterior and house painting services in Mumbai and Navi Mumbai.",
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        {/* <head>

        Google Search Console Verification
        <meta
          name="google-site-verification"
          content="YAHAN_APNA_VERIFICATION_CODE_DALO"
        />

      </head> */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
        {/* ✅ NAVBAR WITH LINKS */}
        <Navbar links={navLinks} ctaText="Contact Us" />
{/* <GoogleAnalytics /> */}
        {/* PAGE CONTENT */}
        {children}

       {/* Google Analytics Script */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SP9SZ4YDS1"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SP9SZ4YDS1');
          `}
        </Script> */}
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
