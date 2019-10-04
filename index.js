//?Input usuario
const inquirer = require('inquirer')


//? Sistema especialista
const nools = require("nools");
const flow = nools.compile(require.resolve('./alimento.nools'));
const Alimento = flow.getDefined("Alimento");

function awnser(escolha) {
    const session = flow.getSession(escolha);
    session.match().then(() => session.dispose());
}

async function questions() {


    var escolha = new Alimento();
    var questions = [{
        type: 'input',
        name: 'escolhasabor',
        message: "Qual o sabor predominante você  deseja na comida? doce ou salgado?"
    },
    {
        type: 'input',
        name: 'tempopreparo',
        message: "Qual o tempo de preparo máximo que você deseja?"
    },
    {
        type: 'input',
        name: 'estilocomida',
        message: "Qual o estilo de comida?"
    },
    {
        type: 'input',
        name: 'restricoes',
        message: "Alguma restrição alimentícia?"
    },
    {
        type: 'input',
        name: 'tipocomida',
        message: "Qual o tipo de comida?"
    },
    {
        type: 'input',
        name: 'valor',
        message: "O mais importa, o quanto deseja gastar??"
    },
    ]

    inquirer.prompt(questions).then(value => {
        escolha.escolhasabor = value["escolhasabor"];
        escolha.tempopreparo = value["tempopreparo"];
        escolha.estilocomida = value["estilocomida"];
        escolha.restricoes = value["restricoes"];
        escolha.tipocomida = value["tipocomida"];
        escolha.valor = value["valor"];

    }).finally(()=>{
        awnser(escolha);
    })

}

async function run() {
    console.log("Iniciando o Sistema Especialista")
    questions();
    

}

run();



