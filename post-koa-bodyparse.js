const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx) => {
    console.log(ctx.method.toLocaleLowerCase(), ctx.request)
    if(ctx.url === '/' && ctx.method.toLocaleLowerCase() === 'get') {
        //显示表单页面
        let html=`
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body=html;
    } else if(ctx.url === '/' && ctx.method.toLocaleLowerCase() === 'post') {
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {
        ctx.body = '<h1> 404 page</h1>'
    }
})




app.listen('5555', () => {
    console.log('server is starting');
});
