const request = require('supertest');
const app = require('../src/server');

describe('API', () => {
  describe('GET /', () => {
    it('should return the text "Hello from koajs" ', (done) => {
      request(app.listen())
      .get('/')
      .expect(200, function(err, res) {
        if (err) return done(err);
        done();
      });
    });
  });
});
