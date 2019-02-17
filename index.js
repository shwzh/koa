const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    console.log(ctx.req);
    if(ctx.url === '/' && ctx.method.toLocaleLowerCase() === 'get') {
        let html =
            `
            <form action="/" method="POST">
                <p>username</p>
                <input type="text" name="username" />
                <p>age</p>
                <input type="text" name="age" />
                <p>website</p>
                <input type="text" name="website" />
                <button type="submit">提交</button>
            </form>
        
            `
        ctx.body = html;
    } else if(ctx.url === '/' && ctx.method.toLocaleLowerCase() === 'post') {
        let pastData= await parsePostData(ctx);
        ctx.body= pastData;


    } else {
        ctx.body = '<h1>404</h1>'
    }
});

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try{
            let postdata="";
            ctx.req.on('data',(data)=>{
                postdata += data
            });
            ctx.req.on("end",function(){
                let parseData = parseQueryStr( postdata);
                resolve(parseData);
            })
        }catch(error){
            reject(error);
        }
    })
};
function parseQueryStr(queryStr) {
    let queryData={};
    let queryStrList = queryStr.split('&');
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen('5555', () => {
    console.log('servcer is start');
});
