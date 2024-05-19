import AccountSetting from './AccountSetting';
import AdminFeatures from './AdminFeatures';

import PasswordChange from './PasswordChange';
import UserFeatures from './UserFeatures';

function UserAccount({}) {
  const user = {
    name: 'Rahul',
    email: 'Karadwal@gmail.com',
    role: 'admin',
  };
  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <UserFeatures />
          {user.role === 'admin' && <AdminFeatures />}
        </nav>

        <div className="user-view__content">
          <AccountSetting />
          <div className="line">&nbsp;</div>
          <PasswordChange />
        </div>
      </div>
    </main>
  );
}

export default UserAccount;
