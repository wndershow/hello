var http = require("http");

http.createServer(function (req,res){
    time = (new Date).getTime().toString()+"\n";
    res.writeHeader(200,{"Content-Type":"text/plain"});
    res.end(time + '*****');
}).listen(3000);



console.log("Starting server running at http://127.0.0.1:3000/");
