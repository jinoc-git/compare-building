import type { ChartDataItemType } from 'types/chart.type';

export const addCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const changeAmountFormat = (amount: number) => {
  const units = ['', '만', '억'];
  let result = '';
  let unitIndex = 0;

  while (amount > 0) {
    if (amount % 10000 !== 0) {
      result = (amount % 10000) + units[unitIndex] + ' ' + result;
    }
    amount = Math.floor(amount / 10000);
    unitIndex++;
  }

  result = result.trim();

  return result + '원';
};

const sortYearMonth = (data: ChartDataItemType) => {
  return data.sort((a, b) => {
    if (a.date.year !== b.date.year) return a.date.year - b.date.year;
    else return a.date.month - b.date.month;
  });
};

export const changeChartDataFormat = (data: ChartDataItemType, name: string) => {
  const sortedData = sortYearMonth(data);
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
