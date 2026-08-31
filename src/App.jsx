import { useState } from "react";
import { IntlProvider } from "react-intl";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import AIChatbot from "./components/AIChatbot";
import AnalyticsTracker from "./components/AnalyticsTracker";
import AppRoutes from "./routes/AppRoutes";

import { ThemeProvider } from "./context/ThemeContext";

import en from "./i18n/en.json";
import hi from "./i18n/hi.json";

const messages = {
  en,
  hi,
};

const App = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem(
      "language",
      newLanguage
    );
  };

  return (
    <ThemeProvider>

      <IntlProvider
        locale={language}
        messages={messages[language]}
        defaultLocale="en"
      >

        <CursorGlow />
        <AnalyticsTracker />


        <Navbar
          language={language}
          changeLanguage={changeLanguage}
        />

        <main>
          <AppRoutes />
        </main>

        <Footer />

        {/* 🤖 Global AI Assistant */}

        <AIChatbot />

      </IntlProvider>

    </ThemeProvider>
  );
};

export default App;