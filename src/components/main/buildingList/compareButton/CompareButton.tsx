import React from 'react';

import { Button } from 'components/ui/button';

const CompareButton = () => {
  return (
    <div className="flex justify-end items-center w-full h-[60px]">
      <Button
        variant={'outline'}
        className="border-[#8870ED] text-[#8870ED] hover:text-[#8870ED] font-semibold"
      >
        비교하기
      </Button>
    </div>
  );
};

export default CompareButton;
