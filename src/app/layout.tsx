import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Industrias Aqua",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // es-CO: el navegador y los lectores de pantalla usan español de Colombia.
    <html lang="es-CO" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
