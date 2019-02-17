const Koa = require('koa');
const app = new Koa();
const fs = require('fs');



app.use(async (ctx) => {
    let url = ctx.url;

    let html = await route(url);
    ctx.body = html;

});
async function route(url) {
    let page = '404.html';

    switch(url) {
        case '/' :
            page = 'index.html';
            break;
        case '/user':
            page = 'user.html';
            break;
        case '/wife':
            page = 'wife.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    console.log(render(page),'111111');
    return render(page);

}

function render(page) {
    return new Promise((resolve, reject) =>{
        let pageUrl = `./page/${page}`;

        fs.readFile(pageUrl,'binary',(err,data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
app.listen('5555',() => {
    console.log('server is starting');
})


