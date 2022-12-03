import Login from "../../login";
import ingresoMiembro from "../../ingresoMiembro";


const email = Cypress.env('email')
const password = Cypress.env('password')

describe('Testing basic Ghost', () => {
    context('Given I access the search engine page', () => {
        beforeEach(()=>{
            const login = new Login();
            login.navigate();
        })
        context('When I write and login in the page', () => {
            beforeEach(()=>{
                const login = new Login();
                login.enterEmail(email);
                cy.wait(1000)
                cy.get('input[name="identification"]').should('have.value',email)
                cy.wait(1000)
                cy.get('button[class="forgotten-link gh-btn gh-btn-link gh-btn-icon ember-view"]').contains('Forgot?').click()
                cy.wait(2000)
            });
 
            it("Then the title and content should be empty", function () {
                const ingreso = new ingresoMiembro();
                ingreso.ingresoMiembro();
                
            })
        })
    })
})