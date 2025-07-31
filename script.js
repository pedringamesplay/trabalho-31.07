const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pizza ou Hamburguer?",
        alternativas: [
            {
                texto: "Pizzaaaaaa🍕🍕🍕",
                afirmacao: "Ótimas escolhas"
            },  
            {
                texto: "Hamburguerrrrrr🍔🍔🍔",
                afirmacao: "Ótimas ecolhas"
            }
        ]
    },
    {
        enunciado: "Messi ou Crisiano Ronaldo",
        alternativas: [
            {
                texto: "Messi🔟",
                afirmacao: ""
            },
            {
                texto: "Cristiano Ronaldo7️⃣",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Praia ou pscinaa?",
        alternativas: [
            {
                texto: "Praiaaaaa🏖",
                afirmacao: ""
            },      
            {
                texto: "Piscina🏊",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Matemática ou português?",
        alternativas: [
            {
                texto: "Matemáticaaaa➗",
                afirmacao: ""
            } ,   
            {
                texto: "Portuguêsssss📝 ",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Pagode ou Rock",
        alternativas: [
            {
                texto: "Pagodeeeee🪘",
                afirmacao: ""
            },
            {
                texto: "Rock aaaaaaaaa🎸",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();               