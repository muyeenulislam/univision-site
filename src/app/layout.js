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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/favicon.svg" />
        <meta property="og:url" content="https://univision.hk" />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="/images/favicon.svg"
          sizes="32x32"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="/images/favicon.svg"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/favicon.svg"
          sizes="180x180"
        />
      </head>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "transparent",
              itemActiveColor: "transparent",
            },
          },
          token: {
            colorBgElevated: "#038175",
            colorText: "white",
          },
        }}
      >
        <body className={`${montserrat.className} relative mt-[-100px]`}>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </ConfigProvider>
    </html>
  );
}
