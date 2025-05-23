const request = require('supertest');
const app = require('./index'); // Make sure path matches your file

describe('GET /health', () => {
  it('should return Hello World!', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello World!");
  });
});
