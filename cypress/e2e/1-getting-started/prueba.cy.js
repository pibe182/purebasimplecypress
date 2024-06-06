describe('Hola Mundo', () => {
    it('Muestra un mensaje de saludo', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Hola Mundo')
    })
})
