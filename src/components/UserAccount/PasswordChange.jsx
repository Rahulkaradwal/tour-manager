function PasswordChange() {
  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <form className="form form-user-password">
        <div className="form__group">
          <label htmlFor="password-current" className="form__label">
            Current password
          </label>
          <input
            id="password-current"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            New password
          </label>
          <input
            id="password"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="form__group ma-bt-lg">
          <label htmlFor="password-confirm" className="form__label">
            Confirm password
          </label>
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
  );
}

export default PasswordChange;
