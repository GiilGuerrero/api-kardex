var express = require('express');
var jwt = require('jsonwebtoken')
var puerto = process.env.PORT || 3000;
var app = express();

app.use(express.son());
app.get('/calificaciones', function(req,res){
    console.log('Token recibido' + req.query.token);
    jwt,verify(req.query.token, 'claveSecreta', 
    function(error){
        if(error){
            res.status(403).json({mensaje: 'Autorización no valida'});
        }
        else{
            res.json({
                mensaje: 'Aquí están las calificaciones'
            });
        }    
    });
    res.json({
        mensaje: 'Aquí estan las calificaciones'
    });
});

app.post('/login', function(req,res){
    
    var alumno = {
        email: 'alumno@uaslp.mx',
        password: '123'
    };

    if(req.body.email == alumno.email && req.body.password == alumno.password)
    {
        var token = jwt.sign({
            usuario: 'alumno',
            nombre: 'Gilberto',
            claveUnica: 227505
    
        }, 'claveSecreta', {expiresIn: '1h'});
        console.log('Token generado: ' + token);
        res.json({
            Token: token
        });
    }

});

app.listen(puerto,function(){
    console.log('Servidor corriendo en el puerto' + puerto);
});