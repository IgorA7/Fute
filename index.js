

//Exibir nome da empresa

console.log('Omma - Receitas com afeto')




let receita = {

    titulo: "Bolo de cenoura",

    nivelDificuldade: "Facil",

    listaIngredientes: ["Cenoura", "Farinha de Trigo", "Ovos", "Leite"],

    preparo: "Mistura tudo e coloca numa forma untada para assar a 200C",

    linkVideo: "http://youtube.com",

    vegana: false

};




console.log(receita.titulo + receita.vegana);




//Template String

console.log(`

Titulo: ${receita.titulo}

Vegana: ${receita.vegana ? 'sim' : 'nao'}

`);





let receitas = [

    {

        titulo: "Bolo de cenoura",

        nivelDificuldade: "Facil",

        listaIngredientes: ["Cenoura", "Farinha de Trigo", "Ovos", "Leite"],

        preparo: "Mistura tudo e coloca numa forma untada para assar a 200C",

        linkVideo: "http://youtube.com",

        vegana: false

    },

    {

        titulo: "Tabule",

        nivelDificuldade: "Facil",

        listaIngredientes: ["Farinha de Hidratado", "Tomate", "pepino", "Suco limão"],

        preparo: "Corta tudo bem pequeno e mistura com suco de limão e azeite",

        linkVideo: "http://youtube.com",

        vegana: true

    }

]




//nomeArray [INDICE].atributo

console.log(receita[0].titulo);




//3- Criar uma função para cadastrar receitas

//Arrow function




const cadastrarReceita = (titulo, nivelDificuldade, listaIngredientes, preparo, linkVideo, vegana) => {

    let novaReceita = {

        titulo: titulo,

        nivelDificuldade: nivelDificuldade,

        listaIngredientes: listaIngredientes,

        preparo: preparo,

        linkVideo: linkVideo,

        vegana: vegana,

    };




    //Array.push()adiciona um novo item no array

    receitas.push(novaReceita);




    //Feedback para o usuario

    console.log(`Nova receita cadastrada: ${novaReceita.titulo}`)

};




cadastrarReceita(

    "Misto-quente",

    "Facil"

    ["Pão", "Queijo", "Presunto"],

    "Junto tudo e esquenta",

)

function exibirReceita() {
   receitas.forEach(receita => {
      console.log(`
         Título: ${receita.titulo}
         Nível de Dificuldade: ${receita.nivelDificuldade}
         Ingredientes: ${receita.listaIngredientes.join(", ")}
         Modo de Preparo: ${receita.preparo}
         Link do Vídeo: ${receita.linkVideo}
         Vegana: ${receita.vegana ? 'sim' : 'não'}
         `);
    });
}



  exibirReceita();


