const http = require('http');

const server = http.createServer((req, res) => {
    let { url } = req;
    let chunks = [];
    
    //this is a readable stream
    req.on("data", (chunk)=>{
        chunks.push(chunk)
    });
    
    req.on("end", ()=>{
        const body = {
            url: req.url,
            method: req.method
        }

        const wildcard = {
            baseballPlayer: "Barry Bonds",
            bestEver: true
        }
        const about = {
            name: "Beau",
            isMyMiddleName: true
        }
        //wildcard route
        if (url === '/')
        res.write(JSON.stringify(wildcard))
        else if(url === "/about"){
            res.write(JSON.stringify(about));
        }
        else if(url === "/echo"){
            res.write(JSON.stringify(body));
        }
        res.end();
    })
})
.listen(3000, ()=>{
    console.log("Server listening on port 3000.... that's neat")
})