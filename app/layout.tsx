import "./globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Manali Kale | Portfolio",
  description: "Manali Kale Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
