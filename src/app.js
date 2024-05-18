import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}))
const usuarios = [
    {id:"1",nombre:"Dalia",apellido:"Gomez",genero:"F"},
    {id:"2",nombre:"Myrna",apellido:"Flores",genero:"F"},
    {id:"3",nombre:"Armando",apellido:"Mendoza",genero:"M"},
    {id:"4",nombre:"Dalia",apellido:"Gomez",genero:"F"},
    {id:"5",nombre:"Herminio",apellido:"Fuentes",genero:"M"},
    {id:"6",nombre:"Juan",apellido:"Zepeda",genero:"M"},
    ]
    
    app.get('/',(req,res)=>{
    let genero = req.query.genero;
    //Si no se ingreso o el genero no es M ni es F no vale el filtro
    if(!genero||(genero!=="M"&&genero!=="F")) return res.send({usuarios})
    //en caso contrario continuamos con el proceso de filtro
    let usuariosFiltrados = usuarios.filter(usuario=>usuario.genero===genero);
    res.send({usuarios:usuariosFiltrados})
    })
    
    app.listen(8080,()=>console.log("Preparado para hacer filtros"))