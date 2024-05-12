import { Form, json, redirect, useActionData } from 'react-router-dom';

function Login() {
  const actionData = useActionData();

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <Form method="post" className="form form--login">
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              name="email"
              type="email"
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
          {actionData?.error && (
            <div className="form__group">
              <p className="form__input-error">{actionData.error}</p>
            </div>
          )}
          <div className="form__group">
            <button type="submit" className="btn btn--green">
              Login
            </button>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default Login;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Validate the input
  if (!data.email || !data.password) {
    return json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const response = await fetch(
      'https://tour-manager-chi.vercel.app/api/users/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      // Handle non-JSON response gracefully
      try {
        const errorResult = await response.json();
        return json(
          { error: errorResult.message || 'Failed to login' },
          { status: response.status }
        );
      } catch (e) {
        return json(
          { error: 'Failed to login, server did not return a JSON response.' },
          { status: response.status }
        );
      }
    }

    const result = await response.json();
    // Store the received token for future requests
    localStorage.setItem('token', result.token);

    return redirect('/');
  } catch (error) {
    return json(
      { error: 'Failed to login, please try again.' },
      { status: 500 }
    );
  }
}
