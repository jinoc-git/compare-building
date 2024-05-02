export interface BuildingType {
  id: string;
  address: string;
  buildingName: string;
  construct: {
    year: number;
    quarter: string;
  };
  totalArea: number;
  nla: number;
  floor: {
    under: number;
    above: number;
  };
  deposit: number;
  rentFee: number;
  maintenanceFee: number;
  vacancyRate: number;
}

export interface BuildingDetailType {
  id: string;
  address: string;
  image: string;
  landPurpose:
    | '일반상업지역'
    | '중심상업지역'
    | '근린상업지역'
    | '유통상업지역';
  totalArea: number;
  bcRat: number;
  floor: {
    under: number;
    above: number;
  };
  totalPark: number;
  construct: {
    year: number;
    quarter: string;
  };
  platArea: number;
  architectureArea: number;
  vlRat: number;
  mainPurpose: '업무시설' | '생활시설' | '공공업무시설';
  deposit: number;
  rentFee: number;
  maintenanceFee: number;
  transactionDate: {
    year: number;
    month: number;
  };
  transactionPrice: number;
}