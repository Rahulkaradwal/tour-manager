import { Form } from 'react-router-dom';

function AccountSetting({ user }) {
  // const user = {
  //   name: 'Rahul',
  //   email: 'Karadwal@gmail.com',
  //   role: 'admin',
  // };
  console.log(user);
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
            value={user.name}
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
            value={user.email}
            required
            name="email"
          />
        </div>
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src={`/img/users/${user.photo}`}
            alt="User photo"
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
          <button className="btn btn--small btn--green">Save settings</button>
        </div>
      </Form>
    </div>
  );
}

export default AccountSetting;
