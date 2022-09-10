describe('Creating the study', () => {
    it('Super_admin!', () => {
      
        cy.visit ('https://radxup-colectiv-uat.azurewebsites.net/')

        cy.title().should('eq','Home | RADxUP.')

        cy.get('input[name=email]').should('be.visible').should('be.enabled').type("var17@duke.edu")

        cy.wait(2000)

        cy.get('button').click()

        cy.wait(2000)

        cy.contains("Study Management").click()

        cy.wait(2000)

        cy .contains("Add Study").click()

        cy.wait(2000)

        cy.get('input[name=study_id]').should('be.visible').should('be.enabled').type("STD123")

        cy.wait(1000)

        cy.get('input[name=name]').should('be.visible').should('be.enabled').type("Covid") 

        cy.wait(1000)

        cy.get('input[name=awardee_org]').should('be.visible').should('be.enabled').type("MGM Hospital")

        cy.wait(1000)

        cy.get(':nth-child(2) > form > .mb-3 > .form-control') .type("Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin.")
         
        cy.wait(1000)
 
        cy.get('#selectQuestion') .click()

        cy.wait(1000)

        
    })
  })