import NavItem from './NavItem';

function UserFeatures() {
  return (
    <ul className="side-nav">
      <NavItem link="#" text="Settings" icon="settings" active={true} />
      <NavItem link="/bookings" text="My bookings" icon="briefcase" />
      <NavItem link="#" text="My reviews" icon="star" />
      <NavItem link="#" text="Billing" icon="credit-card" />
    </ul>
  );
}

export default UserFeatures;
