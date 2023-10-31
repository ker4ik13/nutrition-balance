import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "@/shared/Layout";
import Preloader from "@/widgets/Preloader/Preloader";

// Pages
const HomePage = lazy(() => import("@/pages/HomePage"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Preloader />}>
                <HomePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
