import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Рецепты - Кулинарные рецепты",
  description: "Откройте для себя вкусные рецепты для любого случая. Фильтрация по категориям, поиск и подробные инструкции.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-bold text-gray-800">
              🍳 Рецепты
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="/recipes" className="text-gray-600 hover:text-blue-600 transition-colors">
                Все рецепты
              </a>
              <a href="/recipes/search" className="text-gray-600 hover:text-blue-600 transition-colors">
                Поиск
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 Рецепты. Создано с ❤️ на Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
