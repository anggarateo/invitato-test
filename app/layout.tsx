import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const butler = localFont({
  src: './fonts/Butler_Regular.otf',
  variable: '--font-butler',
  weight: '100 900'
})

const newsreaderDisplay = localFont({
  src: './fonts/NewsreaderDisplay-Regular.ttf',
  variable: '--font-newsreader-display',
  weight: '100 900'
})

const newsreaderText = localFont({
  src: './fonts/NewsreaderText-Regular.ttf',
  variable: '--font-newsreader-text',
  weight: '100 900'
})

const poppins = localFont({
  src: './fonts/Poppins-Regular.otf',
  variable: '--font-poppins',
  weight: '100 900'
})


export const metadata: Metadata = {
  title: "The Wedding of Tiffany & Jared by Invitato",
  description: "Together with joyful hearts, we re pleased to announce the beginning of this new chapter of our lives together. Please click the Website Invitation link on this message for more information about our wedding details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${butler.variable} ${newsreaderDisplay.variable} ${newsreaderText.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
