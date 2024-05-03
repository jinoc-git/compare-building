import React from 'react';

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// #8070ED #66A4DF #CA9EBF

interface Props {}

const ChartContentItem = ({}: Props) => {
  return (
    <ResponsiveContainer width={'100%'} height={'200px'}>
      <LineChart width={450} height={180}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type={'monotone'} stroke="#8070ED" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartContentItem;
