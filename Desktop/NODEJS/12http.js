const http = require('http');

// createServer method is looking for a callback function
// This function in javascript is call anonymous function
// because it has no name or a variable

/**
 * @req is an incoming request
 * imagine a client is requesting from the web browser so you will have the infomation about the method
 * @res is what we are sending back
*/

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Welcome to our home page');
  }
  if(req.url === '/about'){
    //Once we sent back the response we will end the request
    res.end('Welcome to our about page');
  }
  res.end(`
  <h1>Ooop!</h1>
  <p>We can't seem to find the page your are looking for</p>
  <a href="/">Back Home</a>
  `)
})

//What port our server is going to be listening to
//5000 is an arbitrary  or a random choice
server.listen(5000)