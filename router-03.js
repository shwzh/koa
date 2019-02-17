// koa-router  配置多路由界面的插件

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const router = new Router();



router.get('/', function(ctx, next) {
    ctx.body = 'Hello koa router';
})
    .get('/user', function(ctx,next) {
        ctx.body = 'Hello koa router  user page';
    })
app.use(router.routes())
    .use(router.allowedMethods());
app.listen('5555', () => {
    console.log('server is starting');
});


