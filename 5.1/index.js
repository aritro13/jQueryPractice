var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/ajaxcall', function(req, res){
    var data = {
        contactId: 1,
        firstName: 'Aritro',
        lastName: 'Biswas',
        email: 'aritro13@gmail.com'
    };
    res.send(data);
});

app.listen(8000);