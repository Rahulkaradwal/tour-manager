import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
