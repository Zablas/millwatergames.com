import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/block-puzzle/icon-512.png" },
};

export default function BlockPuzzleLayout({ children }: LayoutProps<"/block-puzzle">) {
  return children;
}
