import React, { useState } from 'react';

import { Button } from 'components/ui/button';

const LookChart = () => {
  const [chartIsOpen, setChartIsOpen] = useState(false);

  const handleChartOpen = () => {
    setChartIsOpen(true);
  };

  return (
    <div className="flex justify-end items-center h-[64px]">
      <Button
        onClick={handleChartOpen}
        variant={'outline'}
        name="빌딩 정보 차트 보기 버튼"
        className="h-[35px] border-[#888] hover:border-[#8870ED] hover:text-[#8870ED]"
      >
        차트
      </Button>
    </div>
  );
};

export default LookChart;
