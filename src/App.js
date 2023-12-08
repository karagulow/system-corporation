import { Route, Routes, Navigate } from 'react-router-dom';

import './assets/scss/main.scss';
import { Request } from './pages/Request';
import { Login } from './pages/Login';
import { PasswordReset } from './pages/PasswordReset';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/request" element={<Request />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password-reset" element={<PasswordReset />} />
    </Routes>
  );
}

export default App;
