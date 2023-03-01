
describe('login_page', function () {
 
    it("Login into the Radxup Super Admin", () => {
      cy.visit("https://radxup-colectiv-uat.azurewebsites.net");
      cy.get("#formBasicEmail").type("abhishek@yopmail.com");
      cy.wait(2000);
      cy.get('[type="submit"]').click();
    
      cy.title().should("eq", "Home | RADxUP.");

      cy.get(':nth-child(1) > .mt-5 > .Common_cardBodystyleStudy__VjSY5').click()
      
      cy.wait(6000)

         cy.wait(2000)

         cy.get(':nth-child(3) > .btn').click()

         cy.wait(2000)
        
         cy.get('.modal-footer > .btn-primary').click()

         cy.wait(2000)

         cy.get('.btn btn-primary mx-1 primary-button-bg float-end').click()

         cy.wait(2000)

         cy.contains('Build New e-ICF').click()

    })

  })


