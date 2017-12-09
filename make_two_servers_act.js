// Instructions

// Using the previous example as a guide, create an app that has two web servers.
// Start off by running npm init as well
var http = require("http");
// One that listens on port 7000 and one that listens on port 7500.
var PORT = 7000;
var PORT2 = 7500;

var server = http.createServer(handleRequest);
function handleRequest (req, resp) {
    //this marks end of server side logic
    resp.end("Postitve or Negative Response" + req.url);
}
// The one listening on port 7000 will always tell the user something good about themselves.
server.listen(PORT, function(){
    console.log("Wow you're the best!" + PORT);
})
// The one listening on 7500 will always tell the user something bad about themselves.
server.listen(PORT2, function(){
    console.log("You have need improvement in your life!"+ PORT2);
})
// Make sure you create a Github repo and commit this code!

// Bonus
// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

