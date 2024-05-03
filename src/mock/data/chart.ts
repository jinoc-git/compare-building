import { faker } from '@faker-js/faker/locale/ko';

const generateMockChartData = (id: string) => {
  const chart = {
    id,
    rentFee: Array.from(Array(10), () => {
      return {
        date: {
          year: faker.number.int({ min: 1990, max: 2024 }),
          month: faker.number.int({ min: 1, max: 12 }),
        },
        fee: faker.number.int({ min: 1000000, max: 100000000 }),
      };
    }),
    maintenanceFee: Array.from(Array(10), () => {
      return {
        date: {
          year: faker.number.int({ min: 1990, max: 2024 }),
          month: faker.number.int({ min: 1, max: 12 }),
        },
        fee: faker.number.int({ min: 1000000, max: 100000000 }),
      };
    }),
    vacancyRate: Array.from(Array(10), () => {
      return {
        date: {
          year: faker.number.int({ min: 1990, max: 2024 }),
          month: faker.number.int({ min: 1, max: 12 }),
        },
        rate: faker.number.int({ min: 1000000, max: 100000000 }),
      };
    }),
  };

  return chart;
};

export { generateMockChartData };
