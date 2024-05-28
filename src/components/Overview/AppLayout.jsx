import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { loadTour } from '../../store/tourSlice';
import { getTours } from '../../utils/api';
import Header from './../ui/Header';
import Footer from './../ui/Footer';
import Loader from '../ui/Loader';

function AppLayout() {
  const navigation = useNavigation();
  const data = useLoaderData();
  const dispatch = useDispatch();
  const isLoading = navigation.state === 'loading';

  useEffect(() => {
    if (data && data.tours) {
      dispatch(loadTour(data.tours));
    }
  }, [dispatch, data]);

  return (
    <div className="mainBody">
      <Header />
      {isLoading ? <Loader /> : <Outlet />}
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
    return { error };
  }
}
