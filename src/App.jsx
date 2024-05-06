import AppLayout from '../ui/AppLayout';
import Card from '../ui/Card';
import CardContainer from '../ui/CardContainer';
import Login from '../ui/Login';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <CardContainer />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/tour',
        element: <Card />,
      },
      {},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
