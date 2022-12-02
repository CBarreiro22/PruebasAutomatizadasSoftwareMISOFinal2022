import {faker} from '@faker-js/faker'
class CrearPostTitulo255 {
    crearPostTitulo255() {
        let content=faker.random.alphaNumeric(256)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type('aa')
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').click()
        cy.wait(3000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)
        cy.wait(3000)
        cy.get('button').contains('span','Publish').click()
        cy.wait(1000)
        cy.get('a').contains('span','Posts').click()
        cy.get('Button').contains('Leave').click()
    }

}
export default CrearPostTitulo255