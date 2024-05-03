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
