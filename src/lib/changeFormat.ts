import type { LowHighValuesType } from 'hooks/useCompareDatas';
import type { ChartDataItemType } from 'types/chart.type';

export const addCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const changeAmountFormat = (amount: number) => {
  const units = ['', '만', '억'];
  let copyAmount = amount;
  let result = '';
  let unitIndex = 0;

  while (copyAmount > 0) {
    if (copyAmount % 10000 !== 0) {
      result = (copyAmount % 10000) + units[unitIndex] + ' ' + result;
    }
    copyAmount = Math.floor(copyAmount / 10000);
    unitIndex++;
  }

  result = result.trim();

  return result + '원';
};

export const sortYearQuaterForLowHigh = (data: LowHighValuesType['constructs']) => {
  return data.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    else return Number(a.quarter[2]) - Number(b.quarter[2]);
  });
};

export const sortYearMonthForLowHigh = (data: LowHighValuesType['transactionDates']) => {
  return data.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    else return a.month - b.month;
  });
};

const sortYearMonthForChart = (data: ChartDataItemType) => {
  return data.sort((a, b) => {
    if (a.date.year !== b.date.year) return a.date.year - b.date.year;
    else return a.date.month - b.date.month;
  });
};

export const changeChartDataFormat = (data: ChartDataItemType, name: string) => {
  const sortedData = sortYearMonthForChart(data);
  const changed = sortedData.map((item) => {
    if (item.fee) {
      return {
        date: `${item.date.year}/${item.date.month}`,
        [name]: item.fee,
      };
    }
    if (item.rate) {
      return {
        date: `${item.date.year}/${item.date.month}`,
        [name]: item.rate.toFixed(2),
      };
    }
  });

  return changed;
};
