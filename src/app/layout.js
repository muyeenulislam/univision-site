import Script from "next/script";
import { ConfigProvider } from "antd";
import { Montserrat } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";

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
        <meta property="og:url" content="https://www.univision.hk" />
        <meta property="og:image" content="/images/og-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="univision.hk" />
        <meta property="twitter:url" content="https://www.univision.hk" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/og-logo.png" />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-4CQNRQTCBW`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CQNRQTCBW', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
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
        <body className={`${montserrat.className} relative mt-[-6.25em]`}>
          <AntdRegistry>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </AntdRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
}
