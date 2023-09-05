const http = require("http");
const port = 3000;

const jsonData = require("./JsonData")


const app = http.createServer((req, res)=>{
       if(req.url === '/'){
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>What is Node JS</h1>");
        res.write("<ul>");
        res.write("<li>Node.js is an open-source, server-side JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on the V8 JavaScript engine developed by Google, which is also used in the Chrome web browser. Node.js enables developers to write server-side applications using JavaScript, a language traditionally associated with client-side scripting in web browsers.</li>");
        res.write("<li>Node.js is an open source server environment</li>");
        res.write("<li>Node.js is free</li>");
        res.write("<li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)››</li>");
        res.write("<li>Node.js uses JavaScript on the server</li>");
        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
        res.end()
       }
       else if(req.url === "/JsonData"){
        const data = JSON.stringify(jsonData)
        res.write(data);
        res.end();
       }
       else{
        res.write("This is Error Page");
        res.end();
       }
})

app.listen(port, ()=>{
    console.log(`Server is Runing on Port http://localhost:${port}`)
});
