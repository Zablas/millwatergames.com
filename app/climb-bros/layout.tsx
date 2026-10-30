import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/climb-bros/logo-120.png" },
};

export default function ClimbBrosLayout({ children }: LayoutProps<"/climb-bros">) {
  return children;
}
