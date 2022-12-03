import {faker} from '@faker-js/faker'
class BugVisualizacionPost{
    bugVisualizacionPost() {
        let content=faker.lorem.paragraph(7)
        let content2=faker.lorem.paragraph(1)
        cy.wait(3000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)
        cy.wait(4000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('p').click({force:true})
        cy.wait(6000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value',content)
        cy.wait(6000)
        cy.get('button[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('Posts').click()
        

        cy.wait(2000)

    }

}
export default BugVisualizacionPost