import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from '../components/subcomponents/Header';
import '../style/LogIn.css'
import { TextField, Card, CardContent, CardActions, Button, InputLabel } from '@mui/material';

function LogIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    props.onLogin(username, password);
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div>
          <Card className="centered-form login-form-container">
            <CardContent>
              <form>
                <div className="form-element">
                  <div className="label">
                    <InputLabel htmlFor="username">Корисничко име:</InputLabel>
                  </div>
                  <div className="input">
                    <TextField
                      label=""
                      variant="outlined"
                      id="username"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </div>
                </div>
                <div className="form-element">
                  <div className="label">
                    <InputLabel htmlFor="password">Лозинка:</InputLabel>
                  </div>
                  <div className="input">
                    <TextField
                      label=""
                      variant="outlined"
                      id="password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="password-input-field"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardActions className="button-container">
              <Button variant="contained" className="login-button" onClick={handleLogin}>
                Пријави се
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>

  );
}

export default LogIn;