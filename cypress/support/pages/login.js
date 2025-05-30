import * as acao from './actions.js'

export function informaEmail(){
    acao.facaEm('#email').type("email@email.com")
}

export function informarSenha(){
    acao.facaEm('#password').type(12345)
}

export function clickBotaoEntrar(){
    acao.facaEm('[data-testid=entrar]').click()
}

export function clickBotaoSeCadastrar(){
    acao.facaEm('[data-testid=cadastrar]').click()
}

export function validaTelaLogin(){
    acao.validandoTexto('[class=font-robot]', 'Login')
}
