import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';
import { Request } from './pages/Request';
import { Login } from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="request" element={<Request />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
