import { useEffect } from 'react';
import Footer from '../ui/Footer';
import Header from '../ui/Header';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { getTokenDuration } from '../../utils/getToken';
import { getTours } from '../../utils/api';
function AppLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;

    if (token === 'Expired') {
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <div className="mainBody">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

export async function loader() {
  try {
    const tours = await getTours();
    return { tours };
  } catch (error) {
    return { error }; // Return an empty array in case of error or handle accordingly
  }
}
