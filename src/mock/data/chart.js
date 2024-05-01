import { faker } from "@faker-js/faker/locale/ko";

const generateMockChartData = (id) => {
  const chart = {
    id,
    rentFee: [
      {
        date: {
          year: faker.number.int({ min: 1990, max: 2024 }),
          month: faker.number.int({ min: 1, max: 12 }),
        },
        fee: faker.number.int({ min: 1000000, max: 100000000 }),
      },
    ],
    maintenanceFee: [
      {
        date: {
          year: faker.number.int({ min: 1990, max: 2024 }),
          month: faker.number.int({ min: 1, max: 12 }),
        },
        fee: faker.number.int({ min: 1000000, max: 100000000 }),
      },
    ],
    vacancyRate: [
      {
        date: {
          year: faker.number.int({ min: 1990, max: 2024 }),
          month: faker.number.int({ min: 1, max: 12 }),
        },
        rate: faker.number.int({ min: 1000000, max: 100000000 }),
      },
    ],
  };

  return chart;
};

export { generateMockChartData };
