import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import UserLayout from './layouts/UserLayout.tsx';
import AdminLayout from './layouts/AdminLayout';
import LoginPage from './pages/User/Login';
import HomePage from './pages/User/Home';
import DetailPage from './pages/User/Detail';
import MyPage from './pages/User/My';
import AdminLoginPage from './pages/Admin/Login';
import SigninPage from './pages/User/Signin';
import MapPage from './pages/User/Map';
import AdminSigninPage from './pages/Admin/Signin';
import ErrorPage from './pages/ErrorPage';
import SearchPage from './pages/User/Search';
import AlarmPage from './pages/User/Alarm';
import BookMarkPage from './pages/User/BookMark';
import LocationPage from './pages/User/Location';
import ChallengePage from './pages/User/Challenge';
import LevelDetailPage from './pages/User/LevelDetail';
import ChallengeDetailPage from './pages/User/ChallengeDetail';
import ChallengeStoreListPage from './pages/User/ChallengeDetail/ChallengeStoreListPage';
import MyStampPage from './pages/User/MyStamp';
import MenuListPage from './pages/User/Menu';
import ReviewWritePage from './pages/User/Review';
import OnboardingProviderWrapper from './pages/User/OnBoard/OnboardingWrapper';
// import { AuthCheck } from './utils/authCheck';

const publicRoutes = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <UserLayout />,
    children: [
      {
        index: true,
        // loader: AuthCheck.authPageCheck,
        element: <LoginPage />,
        handle: { isPublic: true },
      },
      {
        path: 'signin',
        // loader: AuthCheck.authPageCheck,
        element: <SigninPage />,
        handle: { isPublic: true },
      },
      {
        path: 'onboard',
        // loader: AuthCheck.authPageCheck,
        element: <OnboardingProviderWrapper />,
      },
      {
        path: 'home',
        // loader: AuthCheck.authPageCheck,
        element: <HomePage />,
      },
      {
        path: 'map',
        children: [
          {
            index: true,
            // loader: AuthCheck.authPageCheck,
            element: <MapPage />,
          },
          {
            path: 'location',
            // loader: AuthCheck.authPageCheck,
            element: <LocationPage />,
          },
        ],
      },
      {
        path: 'detail',
        children: [
          {
            index: true,
            // loader: AuthCheck.authPageCheck,
            element: <DetailPage />,
          },
          {
            path: 'menu',
            // loader: AuthCheck.authPageCheck,
            element: <MenuListPage />,
          },
          {
            path: 'write-review',
            // loader: AuthCheck.authPageCheck,
            element: <ReviewWritePage />,
          },
        ],
      },
      {
        path: 'mypage',
        // loader: AuthCheck.authPageCheck,
        element: <MyPage />,
      },
      {
        path: 'search',
        children: [
          {
            index: true,
            // loader: AuthCheck.authPageCheck,
            element: <SearchPage />,
          },
          {
            path: 'location',
            // loader: AuthCheck.authPageCheck,
            element: <LocationPage />,
          },
        ],
      },
      {
        path: 'alarm',
        // loader: AuthCheck.authPageCheck,
        element: <AlarmPage />,
      },
      {
        path: 'bookmark',
        // loader: AuthCheck.authPageCheck,
        element: <BookMarkPage />,
      },
      {
        path: 'challenge',
        // loader: AuthCheck.authPageCheck,
        element: <ChallengePage />,
      },
      {
        path: 'challenge/:id',
        // loader: AuthCheck.authPageCheck,
        element: <ChallengeDetailPage />,
      },
      {
        path: 'challenge/:id/stores',
        // loader: AuthCheck.authPageCheck,
        element: <ChallengeStoreListPage />,
      },
      {
        path: 'level',
        // loader: AuthCheck.authPageCheck,
        element: <LevelDetailPage />,
      },
      {
        path: 'mystamppage/:cafeId',
        // loader: AuthCheck.authPageCheck,
        element: <MyStampPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminLoginPage /> },
      { path: 'signin', element: <AdminSigninPage /> },
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
