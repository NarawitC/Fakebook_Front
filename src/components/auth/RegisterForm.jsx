import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { ErrorContext } from '../../contexts/ErrorContext';

function RegisterForm({ closeModal }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signUp } = useContext(AuthContext);
  const { setError, setTrigger } = useContext(ErrorContext);

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      // ! Validate input
      await signUp({
        firstName,
        lastName,
        emailOrPhone,
        password,
        confirmPassword,
      });
      closeModal();
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
      setTrigger((prev) => !prev);
    }
  };
  return (
    <form className="row gx-2 gy-3" onSubmit={handleSubmitSignUp}>
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Mobile number or email address"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-green text-4.5 h-9 shadow-none d-flex justify-content-center align-items-center tw-px-10"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
