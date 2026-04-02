import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Danna Sandez | Portfolio",
  description:
    "Ingeniera en software enfocada en frontend, apasionada por crear experiencias digitales increíbles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={playfair.variable}>
      <body className="antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
