// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  //Adding/removing dark class
  useEffect(() => {
    console.log("Theme changed to:", state.theme);
    switch (state.theme) {
      case "dark":
        console.log("Adding dark mode class...");
        document.documentElement.classList.add("dark");
        break;

      case "light":
        console.log("Removing dark mode class...");
        document.documentElement.classList.remove("dark");
        break;
    }
  }, [state.theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
