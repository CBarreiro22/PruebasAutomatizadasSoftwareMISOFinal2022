const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];

class TituloPageMas255 {
    tituloPageMas255() {
        let content = randomData['contenido_mas_255'];
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type('aaa')
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').click()   
        cy.wait(2000)       
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)          
        cy.wait(2000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').click()
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]').contains('span','Publish').click()
        cy.wait(1000)
        cy.get('a').contains('Pages').click()
        cy.get('Button').contains('Leave').click()
    }

}
export default TituloPageMas255