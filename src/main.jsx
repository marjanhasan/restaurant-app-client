import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import "@smastrom/react-rating/style.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="bg-gray-800">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>
);
