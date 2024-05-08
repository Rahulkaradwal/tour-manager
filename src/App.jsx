import AppLayout from './components/AppLayout';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Login from './components/Login';
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
