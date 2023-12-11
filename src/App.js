import { Route, Routes, Navigate } from 'react-router-dom';

import './assets/scss/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Request } from './pages/Request';
import { Login } from './pages/Login';
import { PasswordReset } from './pages/PasswordReset';
import { MonitoringSystem } from './pages/MonitoringSystem';
import { UserSettings } from './pages/UserSettings';
import { Users } from './pages/Users';
import { Staff } from './pages/Staff';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/request" element={<Request />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="monitoring" element={<MonitoringSystem />} />
        <Route path="users" element={<Users />} />
        <Route path="staff" element={<Staff />} />
        <Route path="settings" element={<UserSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
