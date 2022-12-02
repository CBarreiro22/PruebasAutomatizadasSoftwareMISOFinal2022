import {faker} from '@faker-js/faker'
class UrlInvalidaTwitter {
    urlInvalida() {
        cy.get('input[id="user-website"]').scrollIntoView()
        cy.wait(1000)
        cy.get('input[placeholder="https://twitter.com/username"]').type('https://www.google.com')
        cy.wait(1000)
        cy.get('input[placeholder="https://www.facebook.com/username"]').scrollIntoView()
        cy.wait(1000)
        cy.get('button').contains('Save').scrollIntoView()
        cy.wait(1000)
        cy.get('button').contains('Save').click()
        cy.wait(1000)
        cy.get('input[placeholder="https://www.facebook.com/username"]').scrollIntoView()
        cy.wait(1000)
    }

}
export default UrlInvalidaTwitter