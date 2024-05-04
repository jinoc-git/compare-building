import type {
  generateMockBuildingDetail,
  generateMockBuildings,
} from 'mock/data/building';

export type BuildingType = ReturnType<typeof generateMockBuildings>[0];
export type BuildingDetailType = ReturnType<typeof generateMockBuildingDetail>;

export type TransformedBuildingType = {
  id: string;
  address: string;
  buildingName: string;
  construct: {
    year: number;
    quarter: string;
  };
  totalArea: string;
  nla: string;
  floor: string;
  deposit: string;
  rentFee: string;
  maintenanceFee: string;
  vacancyRate: string;
};

export type TransformedBuildingDetailType = {
  id: string;
  address: string;
  image: string;
  landPurpose: string;
  totalArea: string;
  bcRat: number;
  floor: string;
  totalPark: number;
  construct: {
    year: number;
    quarter: string;
  };
  platArea: string;
  architectureArea: string;
  vlRat: string;
  mainPurpose: string;
  deposit: string;
  rentFee: string;
  coverageRatio: string; // 건폐율
  maintenanceFee: string;
  transactionDate: {
    year: number;
    month: number;
  };
  transactionPrice: number;
};
