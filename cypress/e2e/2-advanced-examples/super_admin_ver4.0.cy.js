describe('Creating the study', () => {
   it('Super_admin!', () => {

      cy.visit('https://radxup-colectiv-uat.azurewebsites.net/')

      cy.title().should('eq', 'Home | RADxUP.')

      cy.get('.form-control').type("var17@duke.edu")

      cy.wait(1000)

      cy.get('button').click()

      cy.wait(4000)

      cy.contains('Study Management').click()

      cy.wait(2000)

      cy.contains('Add Study').click()

      cy.wait(1000)

      cy.get('input[name="study_id"]').should('be.visible').should('be.enabled').type("Colds and Flu02")

      cy.wait(1000)

      cy.get('input[name=name]').should('be.visible').should('be.enabled').type("Colds and Flu")

      cy.wait(1000)

      cy.get('input[name=awardee_org]').should('be.visible').should('be.enabled').type("MGM Hospital")

      cy.wait(1000)

      cy.get(':nth-child(2) > form > .mb-3 > .form-control').type("In contrast to the flu, a common cold can be caused by many different types of viruses. The condition is generally harmless and symptoms usually resolve within two weeks.")

      cy.wait(4000)

      cy.get('#selectQuestion').select('Test_client_bug 2.5.6')

      cy.wait(1000)

      cy.get('img.mt-2').click()

      cy.wait(1000)

      cy.get('input[name="0.name"]').type("In contrast to thsey resolve within two weeks.")

      cy.get(1000)

      cy.get('input[name="0.description"').type("In contrast to thsey resolve within two weeks")

      cy.get(1000)

      cy.get('.align-items-center > img.mt-2').click()

      cy.get('input[name="1.name"]').type("In contrast to thsey resolve within two weeks")

      cy.wait(1000)

      cy.get('input[name="1.description"]').type("In contrast to thsey resolve within two weeks")
      
      cy.contains("Next").click()

      cy.wait(2000)

      // Cde to collect grid
      cy.get('input[type="checkbox"]')
         .each(($elem, index) => {
            if (index === 0) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 3) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 17) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 44) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 62) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 73) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 80) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 93) {
               cy.wrap($elem).click({ force: true });
            }
         });

      cy.contains("Next").click()

      cy.wait(2000)
      // CDE to share grid 
      cy.get('input[type="checkbox"]')
         .each(($elem, index) => {
            if (index === 0) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 3) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 17) {
               cy.wrap($elem).click({ force: true });
            } else if (index === 44)
               cy.wrap($elem).click({ force: true });
         })

      cy.wait(2000)

      cy.contains("Next").click()

      cy.wait(2000)

      cy.get('.form-control').type("abhishek@yopmail.com")

      cy.wait(2000)

      cy.contains("Next").click()

      cy.wait(2000)

      cy.get(':nth-child(3) > .admin_panel_button').click()

      cy.wait(2000)

      cy.get('.modal-footer > .btn-primary').click()

      cy.wait(2000)

   })

})
