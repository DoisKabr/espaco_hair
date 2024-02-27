import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Espaço Hair - Inicio",
  description: "Bem-vindo a Espaço Hair, o mulhor lugar para cuidar da sua estética e beleza.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
