import * as veiculo from '../support/pages/cadastroVeiculo.js'
import * as segurado from '../support/pages/cadastroSegurado.js'
describe('Acessando site Seguradora', () => {
  before('Validando Texto', () => {
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
    validandoTexto('#entervehicledata', 'Enter Vehicle Data')
  })

  it('Realizando Cadastro do Veiculo', () => {
    veiculo.selecionaMarca()
    veiculo.selecionaModelo()
    veiculo.informaCilindrada()
    veiculo.informaPerformance()
    veiculo.informaDataManutencao()
    veiculo.informaAcentosCarro()
    veiculo.selecionaDirecaoVolante()
    veiculo.informaAcentosMoto()
    veiculo.selecionaCombustivel()
    veiculo.informaCarga()
    veiculo.informaPesoTotal()
    veiculo.informaListaPreco()
    veiculo.informaNumeroLicenca()
    veiculo.informaQuilometragem()
    veiculo.clicaBotaoProximo()
    
  })
  
  it('Realizando Cadastro do Assegurado', () => {
    // cy.visit('https://sampleapp.tricentis.com/101/app.php')
    segurado.clicaDadosSegurado()
    segurado.informaNome()
    segurado.informaSobrenome()
    segurado.informaAniversario()
    segurado.selecionaSexo()
    segurado.informaEndereco()
    segurado.informaPais()
    segurado.informaCEP()
    segurado.informaCidade()
    segurado.selecionaOcupacao()
    segurado.informaHobbies()
    segurado.informaFoto()
    segurado.clicaBotaoProximo()    
  })
})



function validandoTexto(locator, text){
  cy.get(locator).should('contain.text', text)
}
