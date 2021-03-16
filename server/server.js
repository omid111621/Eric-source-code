/*//============================== TIPS ===========================//

1) middleware ..............app.use(function);
*********************************************************************
2)  const requestHandler = express();


    requestHandler.use (   middlewareOne   (request, response)     );
    requestHandler.use (   middlewareTwo   (request, response)     );
    requestHandler.use (   middlewareThree (request, response)     );
    ...
    requestHandler.use (   middlewareN     (request, response)     );



    const server = http.createServer(requestHandler);
    server.listen(3000);
    >>>>>>>>>>>>>>>>>>>> ALTERNATIVELY WE CAN SAY...
    const requestHandler = express();
    requestHandler.listern(3000);

********************************************************************
3) Easch middleware function can modify the request ot 
the response, but it does not always have to. 
********************************************************************
4) Eventually, some middleware should response to the  
request. It could be the first one; it could be the
last. If none of them respond, then the server will 
hang and the browser will sit alone, without a 
response.
********************************************************************
4) Middlware can affect the response but id does not 
have to.
********************************************************************
5) npm install morgan --save...... A "logger" middleware.
********************************************************************
6) express.static.............A "static file server" middleware.
********************************************************************


 */
//================== EXAMPLES ========================//
//====================================================//
//===================  1  ============================//
//====================================================//

//A simple web server with Node.

// const http = require('http');
// const requestHandler = (request, response) => {
//     console.log("In comes a request to:" + request.url);
//     response.end('Hello World!');
// }

// const server = http.createServer( requestHandler);
// server.listen(3000);

//====================================================//
//====================  2  ===========================//
//====================================================//

//A simple web server with Express.

// const express = require ('express');
// const http = require ('http');

// const requestHandler = express();


// requestHandler.use((request, response) => {
//     console.log(`In comes a request to : ${request.url}`);
    
//     response.end('Hello,World');

// })

// const server = http.createServer( requestHandler);
// server.listen(3000);

//=====================================================//
//=====================  3  ===========================//
//=====================================================//

//serving static file using express.static
 
 

const express = require ('express');
const path = require ('path');
const http = require ('http');
const morgan = require ('morgan');


const requestHandler = express();

requestHandler.use (morgan('short'));

const publicPath = path.resolve(__dirname,"public");
requestHandler.use(express.static(publicPath));

requestHandler.use((request, response)  => {
    response.writeHead(200, { "Content-Type" : "text/plain"});
    response.end(`Looks like you dids not find a static file.`);
});


const server = http.createServer(requestHandler);
server.listen(3000);

console.log(`server is listening to port 3000`)



