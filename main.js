import './style.css'
import javascriptLogo from './javascript.svg'
import { setupDestinos } from './obterDestinos.js'
import { setupCounter } from './counter.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Proximo horário</h1>
    <div>
      <select id="origem"></select>
    </div>
    <div>
      <select id="destino"></select>
    </div>
    <div>
      <select id="horarios"></select>
    </div>
    <div>
      <select id="plataforma"></select>
    </div>
    <button id="chamar">Chamar</button>
  </div>
`

// setupCounter(document.querySelector('#counter'))

const destinos = setupDestinos().sort();
const origem = document.querySelector('#origem')
const destino = document.querySelector('#destino')
const chamar = document.querySelector('#chamar')

const setupSelect = (element) => {
  for (let item in destinos) {
    const option = document.createElement('option')
    option.setAttribute('value', destinos[item]);
    option.innerText = destinos[item];
    element.appendChild(option);
  }
}
setupSelect(origem)
setupSelect(destino)

chamar.addEventListener('click', () => {
  let ut = new SpeechSynthesisUtterance(`teste`);
  window.speechSynthesis.speak(ut)
})
