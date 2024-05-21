import multer from 'multer';
//antes de instanciar multer debemos configurar donde se almacenaran los archivos
const storage = multer.diskStorage({
//destination hará referencia a la carpeta donde se va a guardar el archivo
destinatio: function(req,file,cb){
cb(null,_dirname+'/public/img')//especificamos la carpeta en este punto
},
//filename hará referencia al nombre final que contendrá el archivo
filename: function(req,file,cb){
cb(null,file.originalname)//originalname indica que se conserve el nombre inicial
}
})
export const uploader = multer({storage});