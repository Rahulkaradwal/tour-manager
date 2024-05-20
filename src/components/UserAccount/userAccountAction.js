// actions.js

import { json, redirect } from 'react-router-dom';
import { saveSettings, changePassword } from '../../utils/api';

// Action for saving settings
export async function saveSettingsAction(formData) {
  const data = Object.fromEntries(formData);

  if (!data.email || !data.name) {
    return json({ error: 'All fields are required.' }, { status: 400 });
  }
  const filterData = {
    name: data.name,
    email: data.email,
  };

  const res = await saveSettings(filterData);

  const name = res.data.user.name;

  localStorage.setItem('name', name);
  return res;
}

// Action for changing password
export async function changePasswordAction(formData) {
  const data = Object.fromEntries(formData);

  if (!data.currentPassword || !data.password || !data.passwordConfirm)
    return json(
      { error: 'All fields are required and passwords must match.' },
      { status: 400 }
    );

  if (data.password !== data.passwordConfirm)
    return json(
      { error: 'Password and Confirm Password must be same' },
      { status: 400 }
    );

  const res = await changePassword({ passwordConfirm: data.passwordConfirm });
  //   return res;
  return res;
  // return redirect('/account');
}

// Dispatcher action function
export async function dispatcherAction(args) {
  const formData = await args.request.formData();
  const actionType = formData.get('actionType');

  if (actionType === 'saveSettings') {
    return saveSettingsAction(formData);
  } else if (actionType === 'changePassword') {
    return changePasswordAction(formData);
  } else {
    return json({ error: 'Unknown action type.' }, { status: 400 });
  }
}
