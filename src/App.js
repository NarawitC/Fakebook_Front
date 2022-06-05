import { Toast } from 'bootstrap';
import { useContext, useEffect, useRef } from 'react';
import { ErrorContext } from './contexts/ErrorContext';
import Router from './routes/Router';

function App() {
  const { error, setError } = useContext(ErrorContext);
  const toastEl = useRef();
  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
      setTimeout(() => setError(null), 6000);
    }
  }, [error]);
  return (
    <>
      <div className="toast-container position-absolute p-3 start-50 bottom-0 translate-middle-x">
        <div
          className="toast align-items-center text-white bg-danger border-0"
          ref={toastEl}
        >
          <div className="d-flex">
            <div className="toast-body">{error}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            ></button>
          </div>
        </div>
      </div>
      <Router></Router>;
    </>
  );
}

export default App;
