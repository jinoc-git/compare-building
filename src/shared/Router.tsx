import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Compare from 'app/pages/Compare';
import Main from 'app/pages/Main';
import Header from 'components/common/header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
