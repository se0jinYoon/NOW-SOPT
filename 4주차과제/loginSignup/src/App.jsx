import { useState } from 'react';
import styled from 'styled-components';
import Router from './Router';

function App() {
  const [userId, setUserId] = useState('');
  return (
    <DesktopWrapper>
      <Router setUserId={setUserId} userId={userId} />
    </DesktopWrapper>
  );
}

export default App;

const DesktopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
