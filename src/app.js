// import express from 'express';

// const app = express();
// const PORT = 8080;

// app.get('/saludo',(req,res)=>{
// res.send("Hola desde server con express")
// })

// app.listen(PORT,()=>{
// console.log(`Server run on port: ${PORT}`);
// })

import express from 'express';

const app = express();
/**
*utilizamos los dos puntos ( : ) para indicar que queremos que ese sea el parámetro
*esto nos permite crear una ruta dinámica que pueda recibir cualquier parámetro en lugar
*de tratar de adivinarlo. ahora podemos ingresar cualquier nombre desde la url, en lugar
*de tener que registrar 1000000000000 rutas con 10000000000 nombres diferentes
*/
app.get(`/unparametro/:nombre`,(req,res)=>{
//:parámetro ahora se encontrara dentro del objeto req.params
console.log(req.params.nombre)
res.send(`Bienvenid@, ${req.params.nombre}`)
})
app.get(`/dosparametros/:nombre/:apellido`,(req,res)=>{
//:nombre y :apellido ahora se encontrara dentro del objeto req.params
//podemos definir en nuestro endpoint cuantos parámetros necesitamos
res.send(`El nombre completo es: ${nombre} ${apellido}`)
})
app.listen(8080,()=>console.log("Listo para recibir peticiones"))