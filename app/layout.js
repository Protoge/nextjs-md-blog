import Link from "next/link";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieBanner from "./components/CookieBanner";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <div>
        <Link href="/">
          <h1 className="text-3xl font-bold text-white">RJs Blog</h1>
        </Link>
        <p>Welcome to my tech blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer className="">
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
        <h3>Developed by RJ</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-TQF6ZXN319" />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          <CookieBanner />
          {footer}
        </div>
      </body>
    </html>
  );
}
