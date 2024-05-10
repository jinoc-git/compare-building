import { Server } from 'miragejs';

import responses from './responses';

const environment = process.env.NODE_ENV === 'development' ? 'development' : 'production';

function enableMirageMock() {
  return new Server({
    environment,
    routes() {
      this.namespace = '';
      this.timing = 500;
      Object.values(responses).forEach(({ uri, handleResponse }) => {
        this.get(uri, (_, req) => handleResponse(req));
      });
    },
  });
}

export default enableMirageMock;
