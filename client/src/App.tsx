import React, { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import SplashScreen from "@/components/SplashScreen";
import ChatBot from "@/components/ChatBot";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Locations from "@/pages/Locations";
import Careers from "@/pages/Careers";
import NotFound from "@/pages/not-found";
import Minneapolis from "@/pages/locations/Minneapolis";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import RoofingServices from "./pages/services/RoofingServices";
import RemodelingServices from "./pages/services/RemodelingServices";
import CommercialServices from "./pages/services/CommercialServices";
import SidingServices from "./pages/services/SidingServices";
import WindowServices from "./pages/services/WindowServices";
import LocationServicePage from "./pages/LocationServicePage";
import ProjectDetail from "@/pages/projects/ProjectDetail";
import Layout from "@/components/Layout";

const SERVICE_MAIN_ROUTES = [
  { path: "/roofing-services", component: RoofingServices },
  { path: "/remodeling-services", component: RemodelingServices },
  { path: "/commercial-services", component: CommercialServices },
  { path: "/siding-services", component: SidingServices },
  { path: "/window-services", component: WindowServices },
];

const SERVICE_KEYS = ["roofing", "remodeling", "commercial", "siding", "window"] as const;

const LOCATIONS = [
  "minneapolis",
  "st-paul",
  "coon-rapids",
  "blaine",
  "shoreview",
  "north-oaks",
  "plymouth",
  "ramsey",
  "anoka",
  "rogers",
  "st-michael",
  "maple-grove",
  "fridley",
  "columbia-heights",
];

function Router(): JSX.Element {
  return (
    <Layout>
      <Switch>
        {/* Core pages */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/locations" component={Locations} />
        <Route path="/careers" component={Careers} />

        {/* Legal */}
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />

        {/* Explicit service pages */}
        {SERVICE_MAIN_ROUTES.map((r) => (
          <Route key={r.path} path={r.path} component={r.component} />
        ))}

        {/* Generated service-by-location routes */}
        {SERVICE_KEYS.flatMap((serviceKey) =>
          LOCATIONS.map((loc) => {
            const path = `/${serviceKey}-services-in-${loc}`;
            return (
              <Route
                key={path}
                path={path}
                component={() => <LocationServicePage service={serviceKey} />}
              />
            );
          })
        )}

        {/* Legacy client-side redirects */}
        <Route
          path="/services/roofing"
          component={() => {
            window.location.href = "/roofing-services";
            return null;
          }}
        />
        <Route
          path="/services/remodeling"
          component={() => {
            window.location.href = "/remodeling-services";
            return null;
          }}
        />
        <Route
          path="/services/commercial"
          component={() => {
            window.location.href = "/commercial-services";
            return null;
          }}
        />
        <Route
          path="/services/siding"
          component={() => {
            window.location.href = "/siding-services";
            return null;
          }}
        />
        <Route
          path="/services/windows"
          component={() => {
            window.location.href = "/window-services";
            return null;
          }}
        />

        {/* Location pages */}
        <Route path="/minneapolis" component={Minneapolis} />
        <Route path="/projects/:slug" component={ProjectDetail} /> {/* <-- add this */}

        {/* Fallback */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App(): JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown === "true") setShowSplash(false);
  }, []);

  const handleSplashComplete = (): void => {
    setShowSplash(false);
    sessionStorage.setItem("splashShown", "true");
  };

  if (showSplash) return <SplashScreen onComplete={handleSplashComplete} />;

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
          <ChatBot />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;