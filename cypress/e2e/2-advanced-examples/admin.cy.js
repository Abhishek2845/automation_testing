it('login_page!', function () {
      
    cy.visit('http://localhost:3000/')

    cy.get("#formBasicEmail").type("abhi10@yopmail.com");

    cy.get('[type="submit"]').click();

    cy.get(':nth-child(5) > .float-left > .side-menu > .flex-grow-1')

    

    


    

})