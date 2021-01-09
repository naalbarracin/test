function init() {
	var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
  console.log("hello roland");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var pg = require('pg');

console.log(process.env.DATABASE_URL);


pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   console.log(err+"!!!!!!!!!!!!!!!");
  client.query('SELECT * FROM hon', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});
}
var myLink = document.getElementById('addteam');

myLink.onclick = init()


/*const app = express(); 
const connectionString = 'postgres://username:password@localhost/pg_demo_db' // your connection string 

app.get('/getdata/:id', function(req, res) { 
    if (!req.params.id) { 
       res.status(500); 
       res.send({"Error": "No ID"}); 
    } 
    request.get(
        // here I am using JSONPlaceholder API (Fake Online REST API for prototyping)
        { url: "https://jsonplaceholder.typicode.com/posts/" + req.params.id }, 
        function(error, response, body) { 
            if (!error && response.statusCode == 200) { 
                // get data from body ... e.g. title
                const data = JSON.parse(body);
                const title = data.title || '';

                // store in Postgresql
                pg.connect(connectionString, (err, client, done) => {
                    done();
                    // Handle connection errors
                    if(err) {
                        console.log(err);
                        return res.status(500).json({success: false, data: err});
                    }
                    // SQL Query > Insert Data
                    client.query('INSERT INTO titles(id, title) values($1, $2)', [req.params.id, title]);

                    res.json({title: title}); 
                })
            } 
        }
    ); 
}); 
*/