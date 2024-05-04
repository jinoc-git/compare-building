import type { CompareBuildingDataType } from 'types/building.type';

type TransformdCompareBuildingDatasType = {
  images: string[];
  totalAreas: number[];
  deposits: number[];
  rentFees: number[];
  maintenanceFees: number[];
  transactionDates: { year: number; month: number }[];
  transactionPrices: number[];
};

export const useCompareDatas = () => {
  const transformVerticalDatas = (datas: CompareBuildingDataType) => {
    const result: TransformdCompareBuildingDatasType = {
      images: [],
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
        result.totalAreas.push(data.totalArea);
        result.deposits.push(data.deposit);
        result.rentFees.push(data.rentFee);
        result.maintenanceFees.push(data.maintenanceFee);
        result.transactionDates.push(data.transactionDate);
        result.transactionPrices.push(data.transactionPrice);
      }
    }

    return result;
  };

  return { transformVerticalDatas };
};
