import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/thalassa/logo-120.png" },
};

export default function ThalassaLayout({ children }: LayoutProps<"/thalassa">) {
  return children;
}
