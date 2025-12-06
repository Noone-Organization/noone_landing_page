import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { LanguageProvider } from "@/context/LanguageContext";

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="system"
          >
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
