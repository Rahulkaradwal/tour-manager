import Footer from '../ui/Footer';
import Header from '../ui/Header';
import { Outlet } from 'react-router-dom';
function AppLayout() {
  return (
    <div className="mainBody">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;