class IngresoPerfil {
    ingresoPerfil(){
        cy.wait(5000)
        cy.get('svg[class="w3 mr1 fill-darkgrey"]').click()
        cy.wait(1000)
        cy.get('a').contains('Your profile').click()
        cy.wait(1000)
    }
}
export default IngresoPerfil