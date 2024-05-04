import { generateMockChartData } from 'mock/data/chart';

const chartResponse = {
  uri: '/chart/:id',
  handleResponse: (req: any) => {
    const id = req.params.id;

    if (!id) throw new Error('Invalid id');

    return {
      data: generateMockChartData(id),
    };
  },
};

export default chartResponse;
