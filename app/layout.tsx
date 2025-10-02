import type { Metadata } from "next";
import { Geist, Geist_Mono, Prompt } from "next/font/google";
import "./globals.css";

// components
import Aside from "@/components/Aside";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const geistPrompt = Prompt({
  variable: "--font-prompt",
  weight: ['400', '600'],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Code connect",
  description: "Rede social para desenvolvedores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistPrompt.variable} antialiased`}
      >
        <div className="w-[1200px] mx-auto my-[56px] flex gap-[27px] max-w-[95%] min-h-100vh">
          <div>
            <Aside />
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
