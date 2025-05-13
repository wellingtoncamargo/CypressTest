import * as acao from '../utils.js'

export function selecionaMarca(){
    acao.selecionaOpcoes('#make')
}

export function selecionaModelo(){
    acao.selecionaOpcoes('#model')
}

export function informaCilindrada(){
    acao.facaEm('#cylindercapacity').type(100)
}

export function informaPerformance(){
    acao.facaEm('#engineperformance').type(500)
}

export function informaDataManutencao(){
    acao.facaEm('#dateofmanufacture').type(acao.gerarDataAleatoria(2024,2024))
}

export function informaAcentosCarro(){
    acao.selecionaOpcoes('#numberofseats')
}

export function selecionaDirecaoVolante(){
    acao.facaEm(':nth-child(7) > .group > :nth-child(1) > .ideal-radio').click()
}

export function informaAcentosMoto(){
    acao.selecionaOpcoes('#numberofseatsmotorcycle')
}

export function selecionaCombustivel(){
    acao.selecionaOpcoes('#fuel')
}

export function informaCarga(){
    acao.facaEm('#payload').type(500)
}

export function informaPesoTotal(){
    acao.facaEm('#totalweight').type(500)
}

export function informaListaPreco(){
    acao.facaEm('#listprice').type(500)
}

export function informaNumeroLicenca(){
    acao.facaEm('#licenseplatenumber').type(500)
}

export function informaQuilometragem(){
    acao.facaEm('#annualmileage').type(500)
}

export function clicaBotaoProximo(){
    acao.facaEm('#nextenterinsurantdata').click()
}