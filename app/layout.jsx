import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes"; // Ensure correct import from next-themes

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chantha Coding",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light"> {/* Corrected typo */}
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
