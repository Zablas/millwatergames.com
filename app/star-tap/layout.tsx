import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/star-tap/icon-512.png" },
};

export default function StarTapLayout({ children }: LayoutProps<"/star-tap">) {
  return children;
}
