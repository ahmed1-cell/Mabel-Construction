import React, { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop(): null {
  const [location] = useLocation();

  useEffect(() => {
    // change 'behavior' to 'auto' if you prefer instant jump instead of smooth scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}