import { Form, useActionData, useNavigation } from 'react-router-dom';

function PasswordChange() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <Form method="post" className="form form-user-password">
        <input type="hidden" name="actionType" value="changePassword" />

        <div className="form__group">
          <label htmlFor="password-current" className="form__label">
            Current password
          </label>
          <input
            id="password-current"
            className="form__input"
            type="password"
            placeholder="••••••••"
            name="currentPassword"
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
            name="password"
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
            name="passwordConfirm"
            placeholder="••••••••"
            required
          />
        </div>
        {actionData?.error && (
          <div className="form__group">
            <p className="form__input-error">{actionData.error}</p>
          </div>
        )}
        <div className="form__group right">
          <button className="btn btn--small btn--green btn--save-password">
            {isSubmitting ? 'Updating' : ' Save password'}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default PasswordChange;
