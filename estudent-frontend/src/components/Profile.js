import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Title from '../components/subcomponents/Title';
import '../style/Profile.css';
import axios from 'axios';

function Profile(props) {
  const { id } = props;
  const [student, setStudent] = useState({});
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: '',
    newPassword: ''
  });
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://35.222.157.204:1337/getStudent/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handlePasswordFormChange = (event) => {
    const { name, value } = event.target;
    setPasswordFormData({ ...passwordFormData, [name]: value });
  };

  const handlePasswordFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://35.222.157.204:1337/changePassword/${id}`, passwordFormData);
      setShowPasswordForm(false);
      setPasswordFormData({ oldPassword: '', newPassword: '' });
      var responseStatus = response.data.responseStatus;
      if (responseStatus === 200) {
        setMessage("Лозинка је успешно промењена.");
        setMessageColor("green");
      } else {
        setMessage("Лозинка није тачна.");
        setMessageColor("red");
      }
    } catch (error) {
      if (error.response.status === 404) {
        setMessage("Корисничко име није тачно.");
        setMessageColor("red");
      } else if (error.response.status === 400) {
        setMessage("Лозинка није тачна.");
        setMessageColor("red");
      }
    }
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <div className="profile">
      <Title title="Профил" />
      <table className="profile-table">
        <tbody>
          <tr>
            <td>Име</td>
            <td>{student.ime}</td>
          </tr>
          <tr>
            <td>Презиме</td>
            <td>{student.prezime}</td>
          </tr>
          <tr>
            <td>Број индекса</td>
            <td>{student.indeks}</td>
          </tr>
        </tbody>
      </table>
      <div className="password-change-container">
        <span className="password-change-label" onClick={() => setShowPasswordForm(!showPasswordForm)}>
          Промени лозинку
        </span>
        {showPasswordForm && (
          <form className="password-change-form" onSubmit={handlePasswordFormSubmit}>
            <div className="password-form-group">
              <label htmlFor="oldPassword">Лозинка:</label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                value={passwordFormData.oldPassword}
                onChange={handlePasswordFormChange}
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
                onChange={handlePasswordFormChange}
                required
              />
            </div>
            <button type="submit">Промени лозинку</button>
          </form>
        )}
        {message && (
          <p className='password-change-message' style={{ color: messageColor }}>{message}</p>
        )}
      </div>
    </div>
  );
}

Profile.propTypes = {
  id: PropTypes.number.isRequired
};

export default Profile;