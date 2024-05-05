import React from 'react';

import { changeAmountFormat } from 'lib/changeFormat';

import type { TooltipProps } from 'recharts';

const CustomToolTip = ({ active, payload, label }: TooltipProps<string | number, string>) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];

    const fontColor =
      name === '임대료'
        ? 'text-[#8070ED]'
        : name === '관리비'
          ? 'text-[#66A4DF]'
          : 'text-[#CA9EBF]';

    return (
      <div className="bg-white space-y-2 p-2 border sm:text-sm md:text-base">
        <p>{label}</p>
        <p className={fontColor}>
          {name} :
          {typeof value === 'string'
            ? ` ${value}%`
            : typeof value === 'number'
              ? ` ${changeAmountFormat(value)}`
              : ''}
        </p>
      </div>
    );
  }
  return null;
};

export default CustomToolTip;
