const koa = require('koa');

const app = koa();
app.use(function* init() {
  this.body = 'Hello from koajs';
});
app.listen(3000);
