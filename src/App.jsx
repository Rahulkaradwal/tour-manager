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
import { dispatcherAction } from './components/UserAccount/userAccountAction';

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
        errorElement: <Error />,

        loader: tokenLoader,
      },
      {
        path: '/signup',
        element: <SignUp />,
        errorElement: <Error />,

        action: signUpAction,
      },
      {
        path: 'detail/:tourId',
        errorElement: <Error />,

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
        errorElement: <Error />,

        element: <UserAccount />,
        action: dispatcherAction,

        loader: async (args) => {
          const authResult = await checkAuthLoader(args);
          if (authResult) return authResult;
          return userLoader(args);
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
