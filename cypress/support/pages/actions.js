export function selecionaOpcoes(locator) {
  cy.get(locator).then($select => {
    const options = $select.find('option')
    const randomIndex = Math.floor(Math.random() * (options.length-1))+1
    const randomValue = options.eq(randomIndex).val()
    cy.get(locator).select(randomValue)
  })
}

export function selecionaPorTexto(texto){
    cy.contains(texto).click()
}

export function facaEm(locator){
  return cy.get(locator)
}

export function validandoTexto(locator, text){
  cy.get(locator).should('contain.text', text)
}

export function validandoMensagem(text){
  cy.contains(text)
}