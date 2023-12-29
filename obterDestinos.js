import destinos from './origens.json'

export function setupDestinos() {
    const lista = destinos.map(item => item.cidade)
    const valoresUnicos = [...new Set(lista)]
    return valoresUnicos
    
}