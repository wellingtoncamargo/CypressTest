import * as login from '../../support/pages/login.js'
import * as cadastro from '../../support/pages/cadastroNovoUsuario.js'
import * as listaUsuarios from '../../support/pages/listaUsuarios.js'

describe('Acessando site Serverest', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  // describe('Cadastro de Usuário', () => {
  //   it('Realizando cadastro de um novo usuário', () => {
  //     login.validaTelaLogin()
  //     login.clickBotaoSeCadastrar()
  //     cadastro.validaTelaCadastro()
  //     cadastro.clicaNomeUsuario()
  //     login.informaEmail()
  //     login.informarSenha()
  //     cadastro.clicaCheckAdministrador()
  //     cadastro.clicaBotaoCadastrar()
  //     cadastro.validaMensagem('Cadastro realizado com sucesso')
  //   })

  //   it('Tentando cadastrar um usuário duplicado', () => {
  //     login.validaTelaLogin()
  //     login.clickBotaoSeCadastrar()
  //     cadastro.validaTelaCadastro()
  //     cadastro.clicaNomeUsuario()
  //     login.informaEmail()
  //     login.informarSenha()
  //     cadastro.clicaCheckAdministrador()
  //     cadastro.clicaBotaoCadastrar()
  //     cadastro.validaMensagem('Este email já está sendo usado')
  //   })
  // })

  describe('Login e Sessão', () => {
    beforeEach(()=>{
      
      cy.session('usuario-logado', () => {
          cy.visit('https://front.serverest.dev/')
          login.validaTelaLogin()
          login.informaEmail()
          login.informarSenha()
          login.clickBotaoEntrar()
          cadastro.validaTelaHome()
        })
    })

    it('Mantém sessão logada', () => {
      cadastro.validaTelaHome()
    })
  })

})
