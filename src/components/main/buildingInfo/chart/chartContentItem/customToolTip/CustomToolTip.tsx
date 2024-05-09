import React from 'react';

import { changeAmountFormat } from 'lib/changeFormat';

import type { TooltipProps } from 'recharts';

type TextColor = Record<string, string>;

const textColor: TextColor = {
  임대료: 'text-[#8070ED]',
  관리비: 'text-[#66A4DF]',
  공실률: 'text-[#CA9EBF]',
};

const CustomToolTip = ({ active, payload, label }: TooltipProps<string | number, string>) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];

    return (
      <div className="bg-white space-y-2 p-2 border sm:text-sm md:text-base">
        <p>{label}</p>
        <p className={name ? textColor[name] : ''}>
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
