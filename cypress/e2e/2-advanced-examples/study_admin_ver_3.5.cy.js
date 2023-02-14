
describe('login_page', function () {
 
    it("Login into the Radxup Super Admin", () => {
      cy.visit("https://radxup-colectiv-uat.azurewebsites.net");
      cy.get("#formBasicEmail").type("abhishek@yopmail.com");
      cy.wait(2000);
      cy.get('[type="submit"]').click();
    
      cy.title().should("eq", "Home | RADxUP.");

      cy.get(':nth-child(1) > .mt-5 > .Common_cardBodystyleStudy__VjSY5').click()
      
      cy.wait(6000)

      cy.contains("Study Setting").click();

      cy.wait(5000)
 
      cy.get('[name="Email Templates"]').click()

      cy.wait(4000)

      cy.contains("Add New Template").click();

      cy.wait(5000)

      cy.get(':nth-child(2) > .col > #formName').type('Helloabhi')

      cy.wait(2000)

      cy.get('#formVersion').type('Hello3')

      cy.wait(2000)

      cy.get('.col-md-12 > .col > #formName').type('hello04')

      cy.wait(4000)

      
      cy.wait(2000)

      cy.get('.ms-3 > .admin_panel_button').click()
     
    })

  })


