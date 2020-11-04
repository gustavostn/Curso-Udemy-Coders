const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(express.static('./upload'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload') 
        //2º elemento ('./upload) = pasta de destino, neste caso na pasta upload
    }, 
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`) 
        // na hora nomear o aquivo sera adicionado a data atual (dias e horas) + o nome original do arquivo
    }

})

const upload = multer({storage}).single('plantaAmbiente')
//O nome do input será definido como 'Enviar orçamento"

//fazendo upload do tipo post 
app.post('/upload', (req, res) => {
    upload(req, res, err =>{
        if(err){
            return res.end('Ocorreu um erro')
        }
        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1 
    })
})

app.listen(8080, () => console.log('Executando'));