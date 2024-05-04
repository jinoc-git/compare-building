import type { changeChartDataFormat } from 'lib/changeFormat';
import type { generateMockChartData } from 'mock/data/chart';

export type ChartType = ReturnType<typeof generateMockChartData>;

export type ChartDataItemType = {
  date: {
    year: number;
    month: number;
  };
  fee?: number;
  rate?: number;
}[];

export type ChartDataType = ReturnType<typeof changeChartDataFormat>;
