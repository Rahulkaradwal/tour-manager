import AppLayout, {
  loader as tourLoader,
} from './components/Overview/AppLayout';
import CardContainer from './components/ui/CardContainer';
import Login, { action as loginAction } from './components/auth/Login';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TourDetails, { loader as getTour } from './components/tour/TourDetails';
import SignUp, { action as signUpAction } from './components/auth/Singup';
import { logOut, checkAuthLoader, tokenLoader } from './utils/getToken';
import Error from './components/ui/Error';
import UserAccount, {
  action as userLoader,
} from './components/UserAccount/UserAccount';

import { action as saveSettingAction } from './components/UserAccount/AccountSetting';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: tourLoader,
    id: 'parent',
    errorElement: <Error />,

    children: [
      {
        path: '/',
        loader: tokenLoader,
        id: 'root',
        element: <CardContainer />,
      },
      {
        path: '/login',
        element: <Login />,
        action: loginAction,
        loader: tokenLoader,
      },
      {
        path: '/signup',
        element: <SignUp />,
        action: signUpAction,
      },
      {
        path: 'detail/:tourId',
        loader: async (args) => {
          const authResult = await checkAuthLoader(args);
          if (authResult) return authResult;

          return getTour(args);
        },
        element: <TourDetails />,
      },
      { path: '/logout', action: logOut },
      {
        path: '/account',
        element: <UserAccount />,

        loader: async (args) => {
          const authResult = await checkAuthLoader(args);
          if (authResult) return authResult;
          return userLoader(args);
        },
        action: saveSettingAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
