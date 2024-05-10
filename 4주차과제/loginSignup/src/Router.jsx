import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import MyPage from './pages/myPage/MyPage';

const Router = (props) => {
  const { userId, setUserId } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup userId={userId} setUserId={setUserId} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
