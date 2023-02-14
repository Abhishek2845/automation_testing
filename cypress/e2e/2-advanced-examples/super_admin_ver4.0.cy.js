describe('Creating the study', () => {
   it('Super_admin!', () => {

      cy.visit('https://radxup-colectiv-dev.azurewebsites.net/')

      cy.title().should('eq', 'Home | RADxUP.')

      cy.get('.form-control').type("var17@duke.edu")

      cy.wait(1000)

      cy.get('button').click()

      cy.wait(4000)

      cy.contains('Study Management').click()

      cy.wait(2000)

      cy.contains('Add Study').click()

      cy.wait(1000)

      cy.get('input[name="study_id"]').should('be.visible').should('be.enabled').type("STD123")

      cy.wait(1000)

      cy.get('input[name=name]').should('be.visible').should('be.enabled').type("Covid")

      cy.wait(1000)

      cy.get('input[name=awardee_org]').should('be.visible').should('be.enabled').type("MGM Hospital")

      cy.wait(1000)

      cy.get(':nth-child(2) > form > .mb-3 > .form-control').type("Diabe bloodstream. Wignals your pancreas to release insulin.")

      cy.wait(4000)

      cy.get('#selectQuestion').select('RADx-UP NIH CDEs Version 0.5')

      cy.wait(1000)

      cy.get('img.mt-2').click()

      cy.wait(1000)

      cy.get('input[name="0.name"]').type("hELLO aBHISHEK")

      cy.get(1000)

      cy.get('input[name="0.description"').type("hello abhishek 2")

      cy.get(1000)

      cy.get('.align-items-center > img.mt-2').click()

      cy.get('input[name="1.name"]').type("hELLO aBHISHEK")

      cy.wait(1000)

      cy.get('input[name="1.description"').type("hello abhishek 2")
      
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
      // CDE to shair grid 
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
