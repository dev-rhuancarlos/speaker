
let origensBox = document.querySelector('#origem');
let destinoBox = document.querySelector('#destino');
let plataforma = document.querySelector('#plataforma');
let button = document.querySelector('#button')

// window.speechSynthesis.addEventListener('')

button.addEventListener('click', () => {
    let texto = `Atenção passageiros para o carro de ${origem.value} com destino ${destino.value}, o carro acaba de estacionar na plataforma ${plataforma.value}`
    let ut = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(ut);
})

// Função assíncrona para obter dados de um arquivo JSON usando Fetch
async function obterDados() {
    try {
        const resposta = await fetch('./teste.json');
        if (!resposta.ok) {
            throw new Error(`Erro ao carregar o JSON. Status: ${resposta.status}`);
        }
        lista = await resposta.json();
    } catch (error) {
        console.error('Erro ao obter dados:', error.message);
    }
}

const obterValoresUnicos = (chave) => {
    try {
        // Utilize a lista diretamente, pois ela já é um array após a resolução da Promise
        const valores = lista.map(item => item[chave]);
        const valoresUnicos = [...new Set(valores)];

        return JSON.stringify(valoresUnicos);
    } catch (error) {
        console.error('Erro ao processar o JSON:', error.message);
    }
}

const montaSelect = (string, select) => {

    const jsonDestinos = JSON.parse(string);
    for (let i = 0; i < jsonDestinos.length; i++) {
        console.log(jsonDestinos[i]);
        const option = document.createElement("option")
        option.setAttribute('value', jsonDestinos[i]);
        option.innerText = jsonDestinos[i];
        select.appendChild(option);

    }
}
let lista = [];

// Aguarde o carregamento completo da página antes de executar o código
window.onload = async () => {
    await obterDados();
    const origens = obterValoresUnicos('Origem');
    const destinos = obterValoresUnicos('Destino');
    montaSelect(origens, origensBox);
    montaSelect(destinos, destinoBox);

};
