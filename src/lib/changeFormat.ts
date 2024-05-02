export const addCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const changeAmountFormat = (amount: number) => {
  const units = ['', '만', '억']; // 한글 단위
  const unitCount = units.length;
  const delimiter = ',';

  let result = '';
  let remainingAmount = Math.abs(amount);
  let unitIndex = 0;

  while (remainingAmount > 0 && unitIndex < unitCount) {
    const remainder = remainingAmount % 10000; // 만 단위로 나눈 나머지
    const formattedRemainder = ('0000' + remainder).slice(-4); // 네 자리로 맞추기
    const formattedPortion = formattedRemainder.replace(
      /(\d{1})(\d{3})$/,
      '$1' + delimiter + '$2',
    ); // 쉼표 삽입

    if (formattedPortion !== '0000') {
      // 0이 아닌 값이 있을 때만 단위 표시
      if (result !== '') {
        result =
          formattedPortion.replace(/^0+/, '') + units[unitIndex] + ' ' + result;
      } else {
        result = formattedPortion.replace(/^0+/, '') + units[unitIndex]; // 앞의 0 제거
      }
    }

    remainingAmount = Math.floor(remainingAmount / 10000); // 다음 단위로 이동
    unitIndex++;
  }

  return result === '' ? '0원' : result + '원';
};
