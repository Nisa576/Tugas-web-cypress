describe('Page Object Model Web', () => {
    it('visit Web', ()=>{
        cy.visit('');
        cy.url().should('eq', 'http://localhost:6061/');
        cy.url.then((url) => {
            expect(url).to.be.equal('http://localhost:6061');

        })
    })
    it('Type Quote', () => {
        cy.get('[data-testid=textInputQuote]').type('Ayumu Tenanan Ora Editan');
    })
    it('Select Colour', () => {
        cy.get('[data-testid=colourSelect]').select('Blue');
    })
    it('Submit Quote', () =>{
        cy.get('[data-testid-btnSubmitQuote]').click();
    })
    it('Clear Quote',() =>{
        //cy.wait(3000);
        cy.contains('Ayumu').click()
            .should('not.exist');
        
    })
})