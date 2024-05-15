import { useNavigate } from 'react-router-dom';

function Error({ message }) {
  const navigate = useNavigate();

  return (
    <div className="errorPage">
      <div className="errorbody">
        <h1>Error</h1>
        <p>Error Message</p>
        <button onClick={() => navigate(-1)}>Go Back </button>
      </div>
    </div>
  );
}

export default Error;
