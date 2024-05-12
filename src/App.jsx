import AppLayout from './components/Overview/AppLayout';
import CardContainer, {
  loader as tourLoader,
} from './components/ui/CardContainer';
import Login, { action as loginAction } from './components/auth/Login';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TourDetails, { loader as getTour } from './components/tour/TourDetails';
import SignUp, { action as signUpAction } from './components/auth/Singup';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
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
        loader: getTour,
        element: <TourDetails />,
      },
      {},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
