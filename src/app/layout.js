
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from './footer/page';
import { Header } from './header/page';
import { Navigation } from './navigation/page';
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <Navigation/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
