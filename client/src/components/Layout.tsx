import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="min-h-[calc(100vh-200px)]">{children}</div>
      <Footer />
    </>
  );
}