import AppLayout from './components/Overview/AppLayout';
import Card from './components/ui/Card';
import CardContainer from './components/ui/CardContainer';
import Login from './components/auth/Login';
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
