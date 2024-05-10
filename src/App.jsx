import AppLayout from './components/Overview/AppLayout';
import Card from './components/ui/Card';
import CardContainer, {
  loader as tourLoader,
} from './components/ui/CardContainer';
import Login from './components/auth/Login';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TourDetails, { loader as getTour } from './components/tour/TourDetails';

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
