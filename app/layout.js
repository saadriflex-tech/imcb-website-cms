import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "IMCB G-10/4 - Islamabad Model College for Boys",
  description: "Empowering young minds through quality education, strong character, and a brighter future.",
  icons: {
    icon: "/logo.png",
  },
};

import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import Providers from "@/components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Providers>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
