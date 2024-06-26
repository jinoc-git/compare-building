import React from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { changeChartDataFormat } from 'lib/changeFormat';

import CustomToolTip from './customToolTip/CustomToolTip';

import type { ChartDataItemType } from 'types/chart.type';

interface Props {
  data: ChartDataItemType;
  dataKey: '임대료' | '관리비' | '공실률';
  lineColor: string;
}

const ChartContentItem = ({ data, dataKey, lineColor }: Props) => {
  const chartData = changeChartDataFormat(data, dataKey);

  return (
    <div className="sm:h-[150px] sm:w-full lg:h-[200px] lg:w-[550px]">
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <LineChart
          data={chartData}
          width={450}
          height={180}
          margin={{ top: 5, right: 30, left: 30, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" interval={0} className="sm:hidden md:block md:text-xs lg:text-sm" />
          <Tooltip content={<CustomToolTip />} />
          <Legend />
          <Line
            type={'monotone'}
            dataKey={dataKey}
            stroke={lineColor}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartContentItem;
