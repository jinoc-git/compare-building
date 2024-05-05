import {
  addCommas,
  changeAmountFormat,
  sortYearMonthForLowHigh,
  sortYearQuaterForLowHigh,
} from 'lib/changeFormat';

import type {
  CompareBuildingDataType,
  TransformdCompareBuildingDatasType,
} from 'types/building.type';

export type LowHighValuesType = {
  constructs: { year: number; quarter: string; idx: number }[];
  totalAreas: number[];
  deposits: number[];
  rentFees: number[];
  maintenanceFees: number[];
  transactionDates: { year: number; month: number; idx: number }[];
  transactionPrices: number[];
};

export const useCompareDatas = (datas: CompareBuildingDataType) => {
  const transformVerticalDatas = () => {
    const result: TransformdCompareBuildingDatasType = {
      images: [],
      constructs: [],
      totalAreas: [],
      deposits: [],
      rentFees: [],
      maintenanceFees: [],
      transactionDates: [],
      transactionPrices: [],
    };

    for (let i = 0; i < datas.length; i++) {
      const data = datas[i];
      if (!data) break;

      result.images.push(data.image);
      result.constructs.push(`${data.construct.year} (${data.construct.quarter})`);
      result.totalAreas.push(addCommas(data.totalArea) + '평');
      result.deposits.push(changeAmountFormat(data.deposit) + '/평');
      result.rentFees.push(changeAmountFormat(data.rentFee) + '/평');
      result.maintenanceFees.push(changeAmountFormat(data.maintenanceFee) + '/평');
      result.transactionDates.push(`${data.transactionDate.year}.${data.transactionDate.month} `);
      result.transactionPrices.push(changeAmountFormat(data.transactionPrice));
    }

    return result;
  };

  const getLowHighIdx = () => {
    const values: LowHighValuesType = {
      constructs: [],
      totalAreas: [],
      deposits: [],
      rentFees: [],
      maintenanceFees: [],
      transactionDates: [],
      transactionPrices: [],
    };

    for (let i = 0; i < datas.length; i++) {
      const data = datas[i];
      if (!data) break;

      values.constructs.push({ ...data.construct, idx: i });
      values.totalAreas.push(data.totalArea);
      values.deposits.push(data.deposit);
      values.rentFees.push(data.rentFee);
      values.maintenanceFees.push(data.maintenanceFee);
      values.transactionDates.push({ ...data.transactionDate, idx: i });
      values.transactionPrices.push(data.transactionPrice);
    }

    const sortedConstruct = sortYearQuaterForLowHigh(values.constructs);
    const sortedTransactionDate = sortYearMonthForLowHigh(values.transactionDates);

    const result = {
      low: {
        construct: sortedConstruct[0].idx,
        totalArea: values.totalAreas.indexOf(Math.min(...values.totalAreas)),
        deposit: values.deposits.indexOf(Math.min(...values.deposits)),
        rentFee: values.rentFees.indexOf(Math.min(...values.rentFees)),
        maintenanceFee: values.maintenanceFees.indexOf(Math.min(...values.maintenanceFees)),
        transactionDate: sortedTransactionDate[0].idx,
        transactionPrice: values.transactionPrices.indexOf(Math.min(...values.transactionPrices)),
      },
      high: {
        construct: sortedConstruct[datas.length - 1].idx,
        totalArea: values.totalAreas.indexOf(Math.max(...values.totalAreas)),
        deposit: values.deposits.indexOf(Math.max(...values.deposits)),
        rentFee: values.rentFees.indexOf(Math.max(...values.rentFees)),
        maintenanceFee: values.maintenanceFees.indexOf(Math.max(...values.maintenanceFees)),
        transactionDate: sortedTransactionDate[datas.length - 1].idx,
        transactionPrice: values.transactionPrices.indexOf(Math.max(...values.transactionPrices)),
      },
    };

    return result;
  };

  return { transformVerticalDatas, getLowHighIdx };
};
