import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBars from "@/components/ui/progressBar";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Legacy Guardian",
  description:
    "Owning real estate is a great investment that comes with both rewards and responsibilities. Your property means a lot to you and holds precious memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.className}`}>
      <body>
        <Header />

        {children}
        <Suspense fallback={<>...Loading</>}>
          <ProgressBars />
        </Suspense>

        <Footer />
      </body>
    </html>
  );
}
