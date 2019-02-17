// 安装koa-views  然后使用ejs模板进行动态渲染




const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
// 加载模板引擎
app.use(views(path.join(__dirname, './page'), {
    extension: 'ejs'
}))
app.use( async ( ctx ) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title
    })
})
app.listen(5555,()=>{
    console.log('[demo] server is starting at port 3000');
})
