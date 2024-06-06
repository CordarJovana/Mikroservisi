import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../style/Profile.css';

function PasswordChangeForm(props) {
  const { onSubmit, onCancel } = props;
  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: '',
    newPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setPasswordFormData({ ...passwordFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await onSubmit(passwordFormData);
      setPasswordFormData({ oldPassword: '', newPassword: '' });
      setErrorMessage("");
    } catch (error) {
      if (error.response.status === 404) {
        setErrorMessage("Корисничко име није тачно.");
      } else if (error.response.status === 400) {
        setErrorMessage("Шифра није тачна.");
      } else {
        setErrorMessage("Грешка приликом промене шифре.");
      }
    }
  };

  return (
    <form className="password-change-form" onSubmit={handleFormSubmit}>
      <div className="password-form-group">
        <label htmlFor="oldPassword">Стара лозинка:</label>
        <input
          type="password"
          id="oldPassword"
          name="oldPassword"
          value={passwordFormData.oldPassword}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="password-form-group">
        <label htmlFor="newPassword">Нова лозинка:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={passwordFormData.newPassword}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="password-change-buttons">
        <button type="submit">Промени лозинку</button>
        <button type="button" onClick={onCancel}>Откажи</button>
      </div>
      {errorMessage && (
        <p className="password-change-message" style={{ color: 'red' }}>{errorMessage}</p>
      )}
    </form>
  );
}

PasswordChangeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default PasswordChangeForm;
