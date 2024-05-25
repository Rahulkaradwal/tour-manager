import { useActionData, Form, redirect, json } from 'react-router-dom';
import { url } from '../../utils/api';

function SignUp() {
  // Fetch action data to show error messages or other responses
  const actionData = useActionData();

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Sign Up for Your Account</h2>
        <Form
          method="post"
          encType="multipart/form-data"
          className="form form--login"
        >
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="form__input"
              placeholder="Name"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form__input"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="form__input"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label htmlFor="confirmPassword" className="form__label">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              className="form__input"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form__group form__photo-upload">
            <input
              className="form__upload"
              type="file"
              accept="image/*"
              id="photo"
              name="photo"
            />
            <label htmlFor="photo">Choose Profile Picture</label>
          </div>

          {actionData?.error && (
            <div className="form__group">
              <p className="form__input-error">{actionData.error}</p>
            </div>
          )}
          <div className="form__group">
            <button type="submit" className="btn btn--green">
              Create Account
            </button>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default SignUp;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Validate the input
  if (
    !data.email ||
    !data.password ||
    !data.name ||
    data.password !== data.confirmPassword
  ) {
    return json(
      { error: 'All fields are required and passwords must match.' },
      { status: 400 }
    );
  }
  const finalData = new FormData();
  finalData.append('name', data.name);
  finalData.append('email', data.email);
  finalData.append('password', data.password);
  finalData.append('confirmPassword', data.confirmPassword);
  if (formData.get('photo')) {
    finalData.append('photo', formData.get('photo'));
  }

  try {
    const response = await fetch(`${url}/users/signup`, {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(data),
      body: finalData,
    });

    if (!response.ok) {
      const errorResult = await response.json();
      return json(
        { error: errorResult.message || 'Failed to sign up.' },
        { status: response.status }
      );
    }

    const result = await response.json();

    // Assuming the result has a token you want to store
    localStorage.setItem('token', result.token);

    // Redirect to another page after successful signup
    return redirect('/login');
  } catch (error) {
    console.error('Error in signup action:', error);
    // Return error details or redirect to an error page
    return json(
      { error: 'Failed to sign up, please try again.' },
      { status: 500 }
    );
  }
}
