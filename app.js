var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);
            response.end();
        });
    } 
    else if(request.url === '/cars/new') {
        fs.readFile('./views/newcars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);
            response.end();
        });
    } 
    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);
            response.end();
        });
    } 
    else if(request.url === '/stylesheets/superslides.css'){
        fs.readFile('./stylesheets/superslides.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/js/jquery.easing.1.3.js'){
        fs.readFile('./js/jquery.easing.1.3.js', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/javascript'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/js/jquery.animate-enhanced.min.js'){
        fs.readFile('./js/jquery.animate-enhanced.min.js', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/javascript'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/js/dist/jquery.superslides.js'){
        fs.readFile('./js/dist/jquery.superslides.js', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/javascript'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/1831-cars-audi-supercars-hd-wallpaper.jpg'){
        fs.readFile('./images/1831-cars-audi-supercars-hd-wallpaper.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/2015-renault-sport-rs-01-(01).jpg'){
        fs.readFile('./images/2015-renault-sport-rs-01-(01).jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/black-bugatti-desktop-wallpaper.jpg'){
        fs.readFile('./images/black-bugatti-desktop-wallpaper.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/McLaren-P1-GTR-Supercar-1.jpg'){
        fs.readFile('./images/McLaren-P1-GTR-Supercar-1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/supercar-v-biturbo-x-hd-jootix-306693.jpg'){
        fs.readFile('./images/supercar-v-biturbo-x-hd-jootix-306693.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat-1.jpg'){
        fs.readFile('./images/cat-1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat-2.jpg'){
        fs.readFile('./images/cat-2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat-3.jpg'){
        fs.readFile('./images/cat-3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat-4.jpg'){
        fs.readFile('./images/cat-4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat-5.jpg'){
        fs.readFile('./images/cat-5.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");