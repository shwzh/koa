// koa-router  配置多路由界面的插件

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();


// 设置前缀  有时候我们想把所有的路径前面都再加入一个级别，
// 比如原来我们访问的路径是
// http://127.0.0.1:3000/todo，
// 现在我们希望在所有的路径前面都加上一个jspang层级，把路径变成http://127.0.0.1:3000/jspang/todo.
// 这时候就可以使用层级来完成这个功能。路由在创建的时候是可以指定一个前缀的，这个前缀会被至于路由的最顶层，
// 也就是说，这个路由的所有请求都是相对于这个前缀的。


const router = new Router({
    prefix:'/jspang'
})



// 下面的是  http://127.0.0.1:5555/home/sss      http://127.0.0.1:5555/page/sss
let home = new Router();
home.get('/sss',async(ctx)=>{
    ctx.body="Home sss";
}).get('/todo',async(ctx)=>{
    ctx.body ='Home ToDo';
});

let page = new Router();
page.get('/sss',async(ctx)=>{
    ctx.body="Page sss";
}).get('/todo',async(ctx)=>{
    ctx.body ='Page ToDo';
});



router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());


app.use(router.routes())
    .use(router.allowedMethods());
app.listen('5555', () => {
    console.log('server is starting');
});


