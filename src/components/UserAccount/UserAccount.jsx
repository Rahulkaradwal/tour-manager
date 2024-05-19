import { useLoaderData } from 'react-router-dom';
import { getMe } from '../../utils/api';
import AccountSetting from './AccountSetting';
import AdminFeatures from './AdminFeatures';

import PasswordChange from './PasswordChange';
import UserFeatures from './UserFeatures';

function UserAccount() {
  const data = useLoaderData();

  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <UserFeatures />
          {data.doc.role === 'admin' && <AdminFeatures user={data.doc} />}
        </nav>

        <div className="user-view__content">
          <AccountSetting user={data.doc} />
          <div className="line">&nbsp;</div>
          <PasswordChange user={data.doc} />
        </div>
      </div>
    </main>
  );
}

export default UserAccount;

export async function action() {
  const data = await getMe();
  return data;
}
