import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="lg:w-3/4 w-full mt-2 rounded-md bg-slate-50 flex justify-between items-center p-1">
      <div className="flex items-center">
        <img src={Logo} alt="brand-logo" className="w-14" />
        <p className="text-[#4086F4] uppercase">
          task<span className="text-yellow-400">Minder</span>
        </p>
      </div>

      <div className="flex gap-2 mr-4">
        <div
          className={`w-4 h-4 light rounded-full ${
            theme === "light" ? "light active-theme" : ""
          }`}
          onClick={() => setTheme("light")}
        ></div>
        <div
          className={`w-4 h-4 medium rounded-full ${
            theme === "medium" ? "medium active-theme" : ""
          }`}
          onClick={() => setTheme("medium")}
        ></div>
        <div
          className={`w-4 h-4 dark rounded-full ${
            theme === "dark" ? "dark active-theme" : ""
          }`}
          onClick={() => setTheme("dark")}
        ></div>
        <div
          className={`w-4 h-4 gradientOne rounded-full ${
            theme === "gradientOne" ? "gradientOne active-theme" : ""
          }`}
          onClick={() => setTheme("gradientOne")}
        ></div>
        <div
          className={`w-4 h-4 gradientTwo rounded-full ${
            theme === "gradientTwo" ? "gradientTwo active-theme" : ""
          }`}
          onClick={() => setTheme("gradientTwo")}
        ></div>
        <div
          className={`w-4 h-4 gradientThree rounded-full ${
            theme === "gradientThree" ? "gradientThree active-theme" : ""
          }`}
          onClick={() => setTheme("gradientThree")}
        ></div>
      </div>
    </div>
  );
};

export default Header;
