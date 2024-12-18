import "./globals.css";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

export const metadata = {
  title: "NextShop",
  description: "Get your Next shopping fix here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main-background text-silver-chalice-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
