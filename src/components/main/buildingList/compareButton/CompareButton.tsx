import React from 'react';

import { Button } from 'components/ui/button';

const CompareButton = () => {
  return (
    <div className="flex justify-end items-center w-full h-[50px]">
      <Button
        variant={'outline'}
        name="건물 비교하기 버튼"
        className="w-[80px] h-[30px] border-[#8870ED] text-[#8870ED] hover:text-[#8870ED] font-semibold"
      >
        비교하기
      </Button>
    </div>
  );
};

export default CompareButton;
