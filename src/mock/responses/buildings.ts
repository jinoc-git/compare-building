import { generateMockBuildings } from '@mock/data/building';

const buildingsResponse = {
  uri: '/buildings',
  handleResponse: () => {
    return {
      data: generateMockBuildings(),
    };
  },
};

export default buildingsResponse;
