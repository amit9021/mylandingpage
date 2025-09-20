import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { About } from "./components/about";
import { ShopWidget } from "./components/shop";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    // Manual scroll handler for navigation highlighting
    const handleScroll = () => {
      const sections = ["#about", "#shop"];

      let currentSection = "";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100);

          // Check if section is in viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = section;
            }
          }
        }
      });

      // If we found a section in view, highlight it
      if (currentSection) {
        // Remove active class from all nav items
        document.querySelectorAll("#menu .navbar-nav a").forEach((link) => {
          link.parentElement.classList.remove("active");
        });

        // Add active class to current section's nav item
        const navLink = document.querySelector(
          `#menu .navbar-nav a[href="${currentSection}"]`
        );
        if (navLink) {
          navLink.parentElement.classList.add("active");
        }
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Initial call to set active state on page load
    const timer = setTimeout(handleScroll, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="rtl" dir="rtl">
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <ShopWidget />
      <Footer />
    </div>
  );
};

export default App;
