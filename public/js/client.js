    var socket = io.connect("https://expressprojects-vamisola.c9users.io");
    socket.on("news", function(data) {
        console.log(data.message)
    });
    socket.emit("my other event", { message : "client emit" } );
