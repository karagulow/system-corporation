import { Route, Routes, Navigate } from 'react-router-dom';

import './assets/scss/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Request } from './pages/Request';
import { Login } from './pages/Login';
import { PasswordReset } from './pages/PasswordReset';
import { MonitoringSystem } from './pages/MonitoringSystem';
import { UserSettings } from './pages/UserSettings';
import React, { useState, useEffect } from 'react';
import { Users } from './pages/Users';
import { Staff } from './pages/Staff';
import { Logs } from './pages/Logs';

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/request" element={<Request />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route
        path="/password-reset"
        element={<PasswordReset isEmail={true} />}
      />
      <Route
        path="/new-password"
        element={<PasswordReset isPassword={true} />}
      />
      <Route path="/" element={<MainLayout />}>
        <Route path="monitoring" element={<MonitoringSystem />} />
        <Route path="users" element={<Users />} />
        <Route path="staff" element={<Staff />} />
        <Route path="logs" element={<Logs />} />
        <Route path="settings" element={<UserSettings />} />
      </Route>
    </Routes>
  );
};

export default App;
