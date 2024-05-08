import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import Signup from './pages/signup/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
