import { addCommas, changeAmountFormat } from 'lib/changeFormat';

import type {
  CompareBuildingDataType,
  TransformdCompareBuildingDatasType,
} from 'types/building.type';

export const useCompareDatas = () => {
  const transformVerticalDatas = (datas: CompareBuildingDataType) => {
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
      if (data) {
        result.images.push(data.image);
        result.constructs.push(`${data.construct.year} (${data.construct.quarter})`);
        result.totalAreas.push(addCommas(data.totalArea) + '평');
        result.deposits.push(changeAmountFormat(data.deposit) + '/평');
        result.rentFees.push(changeAmountFormat(data.deposit) + '/평');
        result.maintenanceFees.push(changeAmountFormat(data.maintenanceFee) + '/평');
        result.transactionDates.push(`${data.transactionDate.year}.${data.transactionDate.month} `);
        result.transactionPrices.push(changeAmountFormat(data.transactionPrice));
      }
    }

    return result;
  };

  return { transformVerticalDatas };
};
