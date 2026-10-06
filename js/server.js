const express = require ('express');
const cors = require ('cors');

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

app.post("/calculadora", (req, res)=>{
    const {numero1, numero2, operador} = req.body;

    let resultado;

    switch(operador){
        case '+':
            resultado = Number(numero1) + Number(numero2);
            break;
        case '-':
            resultado = Number(numero1) - Number(numero2);
            break;
        case 'x':
            resultado = Number(numero1) * Number(numero2);
            break;
        case '/':
            resultado = Number(numero1) / Number(numero2);
            break;
            default:
                return res.status(400).json({
                    mensagem: "Operador escolhido inválido!"
                });
    }
            res.status(200).json({ resultado });
});


app.listen(PORTA, () =>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
})