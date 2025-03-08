import "./globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Manali Kale | Portfolio",
  description: "Manali Kale Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
