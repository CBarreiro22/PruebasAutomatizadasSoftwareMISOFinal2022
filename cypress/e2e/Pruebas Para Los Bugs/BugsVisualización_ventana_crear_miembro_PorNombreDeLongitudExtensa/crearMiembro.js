import {faker} from '@faker-js/faker'
class CrearMiembro {
    crearMiembro132() {
        let content2 = faker.random.alphaNumeric(131)
        //Name
        cy.get('input[name="name"]').type(content2)
        //validation
        cy.get('input[name="name"]').should('have.value',content2)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }

}
export default CrearMiembro