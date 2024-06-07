import React, { useState } from 'react';
import LogIn from './components/LogIn';
import Home from './components/Home';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [student, setStudent] = useState({});

  const handleLogin = async (username, password) => {
    const response = await axios.post("http://35.222.226.126:1337/login", {
      username,
      password,
    });
    var responseData = response.data;
    if (responseData.responseStatus === 200) {
      setIsLoggedIn(true);
      setStudent(responseData);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = async () => {
    const response = await axios.get("http://35.222.226.126:1337/logout");
    if (response.status === 200) {
      setIsLoggedIn(false);
    } else {
      alert("Грешка при пријављивању!");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={handleLogout} name={student.name} surname={student.surname} id={student.id} />
      ) : (
        <LogIn onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
