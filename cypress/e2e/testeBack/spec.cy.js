
describe('Automação API Serverest', () => {
  let userId
  const user = {
      "nome": "Wellington C",
      "email": "wellingotn@qa.com",
      "password": "12345",
      "administrador": "true"
    }
  
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.fixture('usuario.json').then((fixtureData) => {
      cy.request({
        method: 'POST',
        url: '/usuarios',
        body: fixtureData
      }).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
        expect(response.body).to.have.property('_id').and.to.be.a('string')
        
        userId = response.body._id
        cy.log('Usuário criado com ID:', userId)
      })
    })
  })

  it('Deve consultar um usuário com sucesso', () => {
    cy.request({
      method: 'GET',
      url: `/usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.name).to.equal(user.name)
      expect(response.body.email).to.equal(user.email)
      
    })
  })

  it('Deve excluir um usuário com sucesso', () => {
    cy.request({
      method: 'Delete',
      url: `/usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('message', 'Registro excluído com sucesso')
      
    })
  })

})