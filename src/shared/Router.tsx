import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Compare from '@app/pages/Compare';
import Main from '@app/pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
