import NavItem from './NavItem';

function AdminFeatures() {
  return (
    <div className="admin-nav">
      <h5 className="admin-nav__heading">Admin</h5>
      <ul className="side-nav">
        <NavItem link="#" text="Manage tours" icon="map" />
        <NavItem link="#" text="Manage users" icon="users" />
        <NavItem link="#" text="Manage reviews" icon="star" />
        <NavItem link="#" text="Manage bookings" icon="briefcase" />
      </ul>
    </div>
  );
}

export default AdminFeatures;
