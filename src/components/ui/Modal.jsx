function Modal({ status, message }) {
  console.log(status, message);
  return (
    <dialog className="result-modal" open>
      <h2>{status}</h2>
      <p>{message}</p>
      <form method="dialog">
        <button type="submit">Close</button>
      </form>
    </dialog>
  );
}

export default Modal;
