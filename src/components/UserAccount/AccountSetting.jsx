import { Form, json } from 'react-router-dom';
import { saveSettings } from '../../utils/api';

function AccountSetting({ user }) {
  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <Form method="post" className="form form-user-data">
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            id="name"
            className="form__input"
            type="text"
            defaultValue={user.name}
            required
            name="name"
          />
        </div>
        <div className="form__group ma-bt-md">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input
            id="email"
            className="form__input"
            type="email"
            defaultValue={user.email}
            // defaultValue={newEmail}
            required
            name="email"
          />
        </div>
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src={user.photo ? `/users/${user.photo}` : `/users/default.jpg`}
            alt="User Profile"
          />

          <input
            className="form__upload"
            type="file"
            accept="image/*"
            id="photo"
            name="photo"
          />
          <label htmlFor="photo">Choose new photo</label>
        </div>
        <div className="form__group right">
          <button type="submit" className="btn btn--small btn--green">
            Save settings
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AccountSetting;

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  // Validate the input
  if (!data.email || !data.name) {
    return json({ error: 'All fields are required.' }, { status: 400 });
  }

  const res = await saveSettings(data);
  // const result = await res.json();
  // console.log(result);
  console.log(res);
  return res;
}
