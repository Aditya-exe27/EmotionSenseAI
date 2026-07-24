import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import AuroraBackground from "./components/ui/AuroraBackground.jsx";
import PageTransition from "./components/layout/PageTransition.jsx";

import Home from "./pages/Home.jsx";
import TextAnalysis from "./pages/TextAnalysis.jsx";
import DatasetAnalysis from "./pages/DatasetAnalysis.jsx";
import Analytics from "./pages/Analytics.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen font-body">
      <AuroraBackground />
      <Navbar />
      <main className="relative z-10 pt-28">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/text-analysis"
              element={
                <PageTransition>
                  <TextAnalysis />
                </PageTransition>
              }
            />
            <Route
              path="/dataset-analysis"
              element={
                <PageTransition>
                  <DatasetAnalysis />
                </PageTransition>
              }
            />
            <Route
              path="/analytics"
              element={
                <PageTransition>
                  <Analytics />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
