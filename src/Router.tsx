import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import React from "react";
import DefaultView from "./component/view/DefaultView";
import StorePage from "./pages/store/StorePage";
import ServicePage from "./pages/customerService/ServicePage";
import IntroducePage from "./pages/introduce/IntroducePage";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";

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
  {
    path: "/store",
    element: (
      <DefaultView>
        <StorePage />
      </DefaultView>
    ),
  },
  {
    path: "/store/:id",
    element: (
      <DefaultView>
        <ArticleDetail />
      </DefaultView>
    ),
  },
  {
    path: "/introduce",
    element: (
      <DefaultView>
        <IntroducePage />
      </DefaultView>
    ),
  },
  {
    path: "/service",
    element: (
      <DefaultView>
        <ServicePage />
      </DefaultView>
    ),
  },
]);

const Router = (): React.JSX.Element => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
