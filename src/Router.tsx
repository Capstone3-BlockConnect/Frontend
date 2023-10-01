import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import React from "react";
import DefaultView from "./component/view/DefaultView";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultView>
        <LandingPage />
      </DefaultView>
    ),
  },
  { path: "/login", element: <LoginPage /> },
]);

const Router = (): React.JSX.Element => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
