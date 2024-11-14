import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "NextShop",
  description: "Get your Next shopping fix here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main-background text-silver-chalice-900 overflow-x-clip">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
