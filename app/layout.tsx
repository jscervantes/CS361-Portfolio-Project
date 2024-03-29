import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/header/Header"

const quicksand = Quicksand({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "plant.io",
  description: "do ya like plants?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={quicksand.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
