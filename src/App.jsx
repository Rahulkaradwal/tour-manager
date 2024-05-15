import AppLayout from './components/Overview/AppLayout';
import CardContainer, {
  loader as tourLoader,
} from './components/ui/CardContainer';
import Login, { action as loginAction } from './components/auth/Login';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TourDetails, { loader as getTour } from './components/tour/TourDetails';
import SignUp, { action as signUpAction } from './components/auth/Singup';
import { logOut, checkAuthLoader, tokenLoader } from './utils/getToken';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: tokenLoader,
    id: 'root',

    children: [
      {
        path: '/',
        loader: tourLoader,
        element: <CardContainer />,
      },
      {
        path: '/login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: '/signup',
        element: <SignUp />,
        action: signUpAction,
      },
      {
        path: 'detail/:tourId',
        loader: async (args) => {
          console.log(args);
          const authResult = await checkAuthLoader(args);
          if (authResult) return authResult;

          return getTour(args);
        },
        element: <TourDetails />,
      },
      { path: '/logout', action: logOut },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
