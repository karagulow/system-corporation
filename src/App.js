import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';
import { Request } from './pages/Request';

function App() {
  return (
    <Routes>
      <Route path="request" element={<Request />} />
    </Routes>
  );
}

export default App;
