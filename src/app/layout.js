import { ConfigProvider } from "antd";

import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "UniVision",
  description: "UniVision Website",
  icons: [
    {
      rel: "icon",
      type: "icon",
      sizes: "32x32",
      url: "/images/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/favicon.svg",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "white",
              itemActiveColor: "white",
            },
          },
          token: {
            colorBgElevated: "#038175",
            colorText: "white",
          },
        }}
      >
        <body className={montserrat.className}>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </ConfigProvider>
    </html>
  );
}
