import * as util from '../utils.js'
import * as acao from './actions.js'

export function clicaNomeUsuario(){
    acao.facaEm('#nome').type("Wellington C")
}

export function clicaBotaoCadastrar(){
    acao.facaEm('[data-testid=cadastrar]').click()
}

export function clicaCheckAdministrador(){
    acao.facaEm('[data-testid=checkbox]').click()
}

export function validaTelaCadastro(){
    acao.validandoTexto('[class=font-robot]', 'Cadastro')
}

export function validaTelaHome(){
    acao.validandoTexto('[class=jumbotron]', 'Bem Vindo  ')
}

export function validaMensagem(text){
    acao.validandoMensagem(text)
}