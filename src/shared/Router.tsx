import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from 'components/common/header/Header';
import FallBack from 'components/skeleton/common/fallback/FallBack';

const Main = lazy(async () => await import('app/pages/Main'));
const Compare = lazy(async () => await import('app/pages/Compare'));
const ErrorComp = lazy(async () => await import('components/error/ErrorComp'));

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<FallBack />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/*" element={<ErrorComp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
