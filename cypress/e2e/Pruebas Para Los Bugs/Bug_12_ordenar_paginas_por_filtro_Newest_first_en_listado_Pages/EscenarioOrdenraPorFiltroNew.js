import {faker} from '@faker-js/faker'
class CrearPostTitulo255 {
    crearPostTitulo255() {
        let content=faker.random.alphaNumeric(100)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type('aa')
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').click()
        cy.wait(3000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)
        cy.wait(3000)
        cy.get('button').contains('span','Publish').click()
        cy.wait(1000)
        cy.get('button').contains('span','Editor').click()
        cy.wait(1000)
        cy.get('a').contains('span','Pages').click()
        cy.wait(1000)
        cy.get('span').contains('Newest first').click()
        cy.wait(1000)
        cy.get('span').contains('Newest first').click()
    }

}
export default CrearPostTitulo255