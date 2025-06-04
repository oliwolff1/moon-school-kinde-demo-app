import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Moon School | Mission Control Dashboard",
  description:
    "Command your space training missions from the ultimate cosmic dashboard.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}