import { Form, useNavigation } from 'react-router-dom';
import { useActionData } from 'react-router-dom';
// import { url } from '../../utils/api';

function AccountSetting({ user }) {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  // const url = 'http://localhost:3000';
  const url = 'https://tour-manager-chi.vercel.app';

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <Form
        method="post"
        encType="multipart/form-data"
        className="form form-user-data"
      >
        <input type="hidden" name="actionType" value="saveSettings" />

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
            required
            name="email"
          />
        </div>
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            crossOrigin="anonymous"
            src={
              user.photo
                ? `${url}/img/users/${user.photo}`
                : `/users/default.jpg`
            }
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
        {actionData?.error && (
          <div className="form__group">
            <p className="form__input-error">{actionData.error}</p>
          </div>
        )}
        <div className="form__group right">
          <button type="submit" className="btn btn--small btn--green">
            {isSubmitting ? 'Saving..' : 'Save settings'}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AccountSetting;
