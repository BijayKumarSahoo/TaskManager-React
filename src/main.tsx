import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { UserContext } from "./context/UserContext.tsx";
import { ThemeContext, useTheme } from "./context/ThemeContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Root() {
  const { theme, toggleTheme } = useTheme();

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <UserContext.Provider value={{ id: 1, name: "John Doe" }}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
