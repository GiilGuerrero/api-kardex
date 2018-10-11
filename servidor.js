var express = require('express');
var jwt = require('jsonwebtoken')
var puerto = process.env.PORT || 3000;
var app = express();

app.use(express.son());
app.get('/calificaciones', function(req,res){
    console.log('Token recibido' + req.query.token);
    res.json({
        mensaje: 'Aquí estan las calificaciones'
    });
});

app.post('/login', function(req,res){
    var token = jwt.sign({
        usuario: 'alumno',
        nombre: 'Gilberto',
        claveUnica: 227505

    }, 'claveSecreta', {expiresIn: '60s'});
    console.log('Token generado: ' + token);
    res.json({
        Token: token
    });
});

app.listen(puerto,function(){
    console.log('Servidor corriendo en el puerto' + puerto);
});