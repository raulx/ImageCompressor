/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const MainPage = lazy(() => import("./pages/MainPage.jsx"));
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex justify-center items-center h-full">
              <div className=" border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
            </div>
          </div>
        }
      >
        <App />
      </Suspense>
    ),

    children: [
      { index: true, element: <LandingPage /> },
      { path: "/main", element: <MainPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
