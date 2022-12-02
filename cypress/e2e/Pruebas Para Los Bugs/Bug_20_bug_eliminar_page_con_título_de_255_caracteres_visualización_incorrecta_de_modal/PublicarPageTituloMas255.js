import {faker} from '@faker-js/faker'

class TituloPageMas255 {
    tituloPageMas255() {
        let content=faker.random.alphaNumeric(256)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type('aaa')
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').click()   
        cy.wait(2000)       
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)          
        cy.wait(2000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').click()
        cy.wait(3000)
        cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click()
        cy.wait(1000)
        cy.get('Button').contains('Delete page').click()
    }

}
export default TituloPageMas255