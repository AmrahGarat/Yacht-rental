import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

import queryClient from "./config/queryClient";
import { Provider } from "react-redux";
import { router } from "./router";
import { store } from "./store";

import "./style/global.css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css";
import "./locales/index";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster richColors />
      </QueryClientProvider>
    </Provider>
  </ThemeProvider>
);
