import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom';

import RootLayout from './pages/Root';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import RegistrationPage from './pages/Registration';
import HomePage from './pages/Home';

import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/Error';
import { action as logoutAction } from './pages/Logout';
import ResetPage, { action as resetPasswordAction } from './pages/Reset';
import ProductDetailsPage, {
  louder as productDetailLoader,
} from './pages/ProductDetails';

import ProfileAccountSecurity from './components/ProfileAccountSecurity';

import { loader as tokenLoader, checkAuthLoader } from './util/auth';

import PublicProfilePage, { profilLoader } from './pages/PublicProfile';
import ProfileGuideList, { productLoader } from './pages/ProfileGuideList';
import ProfileSettingsPage, { editProfilAction } from './pages/ProfileSettings';
import ProfilePointListPage from './pages/ProfilePointList';
import ProfilePointEditPage, {
  editPointAction,
} from './pages/ProfilePointEdit';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id: 'root',
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'logowanie',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'reset',
        element: <ResetPage />,
        action: resetPasswordAction,
      },
      {
        path: 'wyloguj',
        action: logoutAction,
      },
      {
        path: 'rejestracja',
        element: <RegistrationPage />,
      },

      {
        path: 'profil',
        element: <ProfilePage />,
        loader: checkAuthLoader,
        children: [
          {
            path: 'publiczny',
            element: <PublicProfilePage />,
            loader: profilLoader,
          },
          {
            path: 'ustawienia',
            element: <ProfileSettingsPage />,
            loader: profilLoader,
            action: editProfilAction,
          },
          {
            path: 'przewodniki',
            id: 'guide-list',
            loader: productLoader,
            children: [
              {
                index: true,
                element: <ProfileGuideList />,
              },
              {
                path: ':punkty',
                element: <ProfilePointListPage />,
              },
            ],
          },

          {
            path: 'przewodniki/:punkty/:punkt',
            id: 'point-detail',
            loader: productDetailLoader,
            children: [
              {
                index: true,
                element: <ProductDetailsPage />,
              },
              {
                path: 'edit',
                element: <ProfilePointEditPage />,
                action: editPointAction,
              },
            ],
          },
          {
            path: 'prywatnosc',
            element: <ProfileAccountSecurity />,
            action: resetPasswordAction,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
