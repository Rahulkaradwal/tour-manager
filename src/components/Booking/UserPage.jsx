function UserPage() {
  return (
    <div className="user-view__content">
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Your account settings</h2>

        <form className="form form-user-data">
          <div className="form__group">
            <label className="form__label">Name</label>
            <input
              id="name"
              className="form__input"
              type="text"
              value="User Name"
              required
              name="name"
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label">Email address</label>
            <input
              id="email"
              className="form__input"
              type="email"
              value="user@example.com"
              required
              name="email"
            />
          </div>
          <div className="form__group form__photo-upload">
            <img
              className="form__user-photo"
              src="/img/users/user-photo.jpg"
              alt="User photo"
            />
            <input
              className="form__upload"
              type="file"
              accept="image/*"
              id="photo"
              name="photo"
            />
            <label>Choose new photo</label>
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green">Save settings</button>
          </div>
        </form>
      </div>

      <div className="line">&nbsp;</div>

      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form className="form form-user-password">
          <div className="form__group">
            <label className="form__label">Current password</label>
            <input
              id="password-current"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label">New password</label>
            <input
              id="password"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="form__group ma-bt-lg">
            <label className="form__label">Confirm password</label>
            <input
              id="password-confirm"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green btn--save-password">
              Save password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
