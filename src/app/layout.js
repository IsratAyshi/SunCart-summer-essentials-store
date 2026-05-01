import { Geist, Geist_Mono, Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif",
});


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Sunstede | Summer Essentials",
  description: "A modern summer eCommerce platform where users can explore and purchase seasonal products",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${notoSerif.variable} h-full antialiased`}
    >
      <body className={`${manrope.className} min-h-full flex flex-col`}>
        
        {children}
         
      </body>
    </html>
  );
}
