const koa = require('koa');

const app = koa();

app.use(function* init(next) {
  yield next;
  this.body = 'Hello from koajs';
});

app.listen(3000);

module.exports = app;
