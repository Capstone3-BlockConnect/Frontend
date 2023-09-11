import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import Header from "./component/header/Header";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
]);

const Router = () => {
  return;
  <>
    <Header />
    <RouterProvider router={router} />;
  </>;
};

export default Router;
