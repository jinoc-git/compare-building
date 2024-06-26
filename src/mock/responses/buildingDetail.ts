import { generateMockBuildingDetail } from 'mock/data/building';

const buildingDetailResponse = {
  uri: '/building/:id',
  handleResponse: (req: any) => {
    const id = req.params.id;

    if (!id) throw new Error('Invalid id');

    return {
      data: generateMockBuildingDetail(id),
    };
  },
};

export default buildingDetailResponse;
