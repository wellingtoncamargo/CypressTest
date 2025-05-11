import * as acao from '../utils.js'

export function clicaDadosSegurado(){
    acao.facaEm('#enterinsurantdata').click()
}

export function informaNome(){
    acao.facaEm('#firstname').type('Fulano')
}

export function informaSobrenome(){
    acao.facaEm('#lastname').type('deTal')
}

export function informaAniversario(){
    acao.facaEm('#birthdate').type(acao.gerarDataAleatoria(1970,2004))
}

export function selecionaSexo(){
    acao.facaEm(':nth-child(4) > .group > :nth-child(1) > .ideal-radio').click()
}

export function informaEndereco(){
    acao.facaEm('#streetaddress').type('Rua Um')
}

export function informaPais(){
    acao.selecionaOpcoes('#country')
}

export function informaCEP(){
    acao.facaEm('#zipcode').type(12345678)
}

export function informaCidade(){
    acao.facaEm('#city').type('cidade')
}

export function selecionaOcupacao(){
    acao.selecionaOpcoes('#occupation')
}

export function informaHobbies(){
    acao.selecionaPorTexto('Speeding')
    acao.selecionaPorTexto('Bungee Jumping')
    acao.selecionaPorTexto('Skydiving')
}

export function informaFoto(){
    acao.facaEm('#picturecontainer').selectFile('./cypress/fixtures/logotipo_K6.jpg', {force: true})
}

export function clicaBotaoProximo(){
    acao.facaEm('#nextenterproductdata').click()
}