var express = require('express');
// var html = require('./hello.html');  
var app = express();
const PORT = process.env.PORT || 3000;

app.use((request, response, next)=>{
  console.log(request.hostname);
  console.log(request.method);
  console.log(request.url); 

//   console.log(request.host);
next();
})

app.get('/login', (request, response)=>{
    response.sendFile( './login.html', {root: __dirname }); 
});
app.get('/', (request, response)=>{
 response.send('fdfdfd'); 
 }); 
 app.get('/loggingIn', (request, response)=>{
response.send(request.query); 
}); 
app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`); 
});             