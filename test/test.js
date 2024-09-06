const request = require('testJS');
const app = require('./app');

describe('Test the /hello and /goodbye endpoints', () => {
  test('GET /hello/:name should return greeting', async () => {
    const response = await request(app).get('/hello/Nico');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, Nico!');
  });
});