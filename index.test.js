const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return a healthy status and text', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Green Software Engineering Thesis Demo');
  });
});
