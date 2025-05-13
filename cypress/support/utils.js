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

export function gerarDataAleatoria(anoInicio, anoFim) {
  const inicio = new Date(`${anoInicio}-01-01`).getTime()
  const fim = new Date(`${anoFim}-12-31`).getTime()

  const timestampAleatorio = Math.floor(Math.random() * (fim - inicio + 1)) + inicio
  const data = new Date(timestampAleatorio)

  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0') // getMonth() vai de 0 a 11
  const ano = data.getFullYear()

  return `${mes}/${dia}/${ano}`
}