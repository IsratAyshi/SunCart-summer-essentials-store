import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";


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
  title: "SunCart | Summer Essentials Store",
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
