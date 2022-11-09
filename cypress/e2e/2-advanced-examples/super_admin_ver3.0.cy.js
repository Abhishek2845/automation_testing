describe('Creating the study', () => {
    it('Super_admin!', () => {
      
        cy.visit ('http://localhost:3000')

        cy.title().should('eq','Home | RADxUP.')

        cy.get('input[name=email]').should('be.visible').should('be.enabled').type("var17@duke.edu")

        cy.wait(3.
            )

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

        cy.get(':nth-child(2) > form > .mb-3 > .form-control').type("Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin.")
         
        cy.wait(1000)
 
        // cy.get("#selectQuestion > option:nth-child(0)") .select()

        cy.get('select [id = "abhi"]').select('CDE_May 1.5')

        cy.wait (1000)

        cy.get("#__next > div.Home_margin-right-0__MjxhO.row > div.Home_pageContentWrapper__HeIa_.col-md-10.col-12 > div > div.stepper > div.row.mt-5.mb-5 > div.col-md-3 > div.col-md-6 > div > div > div.ms-1.Study_formsetting__OArfT.form-check > input").click()
        
        cy.wait (1000)

        cy.get("#__next > div.Home_margin-right-0__MjxhO.row > div.Home_pageContentWrapper__HeIa_.col-md-10.col-12 > div > div.stepper > div.row.mt-5.mb-5 > div.col-md-2 > div.mb-3 > div > div.ms-1.Study_formsetting__OArfT.form-check > input").click()
    })
  })