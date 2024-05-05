import React from 'react';
import { useNavigate } from 'react-router-dom';

import RootLayout from 'components/common/layouts/RootLayout';
import { Button } from 'components/ui/button';

const ErrorComp = () => {
  const navigate = useNavigate();

  const onClickBackHome = () => {
    navigate('/');
  };

  return (
    <RootLayout>
      <div className="flex-box w-full h-[300px]">
        <div className="space-y-8 text-center">
          <p>잘못된 경로입니다.</p>
          <Button variant={'link'} onClick={onClickBackHome} className="border">
            홈으로
          </Button>
        </div>
      </div>
    </RootLayout>
  );
};

export default ErrorComp;
