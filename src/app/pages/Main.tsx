import React from 'react';

import RootLayout from 'components/common/layouts/RootLayout';
import MockSamples from 'components/MockSamples';

const Main = () => {
  return (
    <RootLayout>
      <div>알스퀘어 Frontend 과제입니다.</div>
      <MockSamples />
    </RootLayout>
  );
};

export default Main;
