import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error.message);
  console.log({ error });

  return (
    <div className="errorPage">
      <div className="errorbody">
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        <button onClick={() => navigate(-1)}>Go Back </button>
      </div>
    </div>
  );
}

export default Error;
