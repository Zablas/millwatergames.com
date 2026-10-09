import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://millwatergames.com"),
  title: "Millwater Games",
  description: "Millwater Games makes games for Android: Thalassa and Star Tap.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
