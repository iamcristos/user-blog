import request from 'supertest';
import app from '../lib/app';

describe('GET', () => {
  it('Fixes Femi error', (done) => {
    request(app)
      .get('/api/vi/sum')
      .expect(200)
      .end(done);
  });
});
