import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import UserLayout from "./layouts/UserLayout.tsx";
import AdminLayout from "./layouts/AdminLayout";
import LoginPage from "./pages/User/Login/index.tsx";
import HomePage from "./pages/User/Home/index.tsx";
import DetailPage from "./pages/User/Detail/index.tsx";
import MyPage from "./pages/User/My/index.tsx";
import AdminLoginPage from "./pages/Admin/Login/index.tsx";
import SigninPage from "./pages/User/Signin/index.tsx";
import MapPage from "./pages/User/Map/index.tsx";
import AdminSigninPage from "./pages/Admin/Signin/index.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import OnBoard from "./pages/User/OnBoard/index.tsx";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "onboard",
        element: <OnBoard />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "detail",
        element: <DetailPage />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminLoginPage />,
      },
      {
        path: "signin",
        element: <AdminSigninPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={publicRoutes} />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};

export default App;
