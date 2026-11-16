import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/priced-out/icon-512.png" },
};

export default function PricedOutLayout({ children }: LayoutProps<"/priced-out">) {
  return children;
}
