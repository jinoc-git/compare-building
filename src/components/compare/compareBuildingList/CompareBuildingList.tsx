import React from 'react';
import { useSearchParams } from 'react-router-dom';

const CompareBuildingList = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('ids'));

  return (
    <div>
      <div>CompareBuildingList</div>
    </div>
  );
};

export default CompareBuildingList;
