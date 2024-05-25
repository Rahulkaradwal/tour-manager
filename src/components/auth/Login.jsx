import {
  Form,
  json,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import Loader from '../ui/Loader';
import { useEffect } from 'react';
import { url } from '../../utils/api';

function Login() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();
  const data = useLoaderData();

  // Redirect if already logged in
  if (data?.token) {
    useEffect(() => {
      navigate('/tours');
    }, [navigate]);
    return <Loader />;
  }

  // Check if we are currently submitting the form
  const isSubmitting = navigation.state === 'submitting';

  return (
    <main className="main">
      {isSubmitting ? (
        <Loader />
      ) : (
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
      )}
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
    const response = await fetch(`${url}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

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

    // Store the received data for future requests
    localStorage.setItem('token', result.token);
    localStorage.setItem('name', result.data.user.name);
    localStorage.setItem('email', result.data.user.email);
    localStorage.setItem('photo', result.data.user.photo);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());

    const token = result.token;

    // Return the necessary data and set the cookie header
    return redirect('/', {
      headers: {
        'Set-Cookie': `token=${token} ; Path=/; HttpOnly; SameSite=Strict`,
      },
    });
  } catch (error) {
    return json(
      { error: 'Failed to login, please try again.' },
      { status: 500 }
    );
  }
}
