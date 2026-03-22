// Layout.jsx
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./PageWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      <Header />

      <main>
        <AnimatePresence mode="wait">
          <PageWrapper key={location.pathname}>
            {children}
          </PageWrapper>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}