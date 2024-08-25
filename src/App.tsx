import { Outlet, useLocation } from "react-router-dom";
import TopNavber from "./components/navber/TopNavber";
import { useState, useEffect } from "react";

function App() {
  const [scrollColor, setScrollColor] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const location = useLocation();

  const handleScrollColor = () => {
    if (window.scrollY >= 40) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };

  window.addEventListener("scroll", handleScrollColor);

  useEffect(() => {
    setHasContent(location.pathname !== "/");
  }, [location]);

  return (
    <main>
      <section
        className={`hover:bg-black hover:opacity-100 duration-500 w-full fixed z-50 top-0 h-auto text-white ${
          hasContent ? "bg-black" : ""
        }`}
      >
        <div
          className={`hidden md:block transition-colors duration-1000 ${
            scrollColor
              ? "bg-black opacity-100 border-none"
              : "hover:opacity-100 transition ease-in-out delay-150 duration-1000"
          }`}
        >
          <TopNavber />
        </div>
        <div className={`md:hidden block ${scrollColor ? "bg-black" : "bg-black"}`}>
          <TopNavber />
        </div>
      </section>
      <div>
        <Outlet />
      </div>
      
    </main>
  );
}

export default App;
