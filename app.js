var express = require('express'),
    app     = express(),
    path    = require('path'),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server),
    users   = [];
    
//Set View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

//Set Static path
app.use(express.static(path.join(__dirname, 'public')));

//Index route
app.get('/', function(req,res){
    res.render('index');
});


//server.listen(process.env.PORT || 3000);console.log('server has started...');

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started...");
});