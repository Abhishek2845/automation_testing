describe('Creating the study', () => {
    it('Super_admin!', () => {
      
        cy.visit ('https://radxup-colectiv-dev.azurewebsites.net/')

        cy.title().should('eq','Home | RADxUP.')

       // cy.get('input[name=email]').should('be.visible').should('be.enabled').type("var17@duke.edu")

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

        cy.wait (1000)

        //cy.gat('.ms-2 mt-2 font-weight-bold').click()

        //cy.contains('Add Arm.svg')

       // cy.get("#__next > div.Home_margin-right-0__MjxhO.row > div.Home_pageContentWrapper__HeIa_.col-md-10.col-12 > div > div.stepper > div.row.mt-5.mb-5 > div.col-md-3 > div.col-md-6 > div > div > div.ms-1.Study_formsetting__OArfT.form-check > input").click()
        
        cy.wait (1000)

        //cy.get("#__next > div.Home_margin-right-0__MjxhO.row > div.Home_pageContentWrapper__HeIa_.col-md-10.col-12 > div > div.stepper > div.row.mt-5.mb-5 > div.col-md-2 > div.mb-3 > div > div.ms-1.Study_formsetting__OArfT.form-check > input").click()

        cy.contains("Next").click()

      
       cy.wait (2000)
       
       cy.get('[type="checkbox"]').check()

       describe('Checkboxes', () => {
        beforeEach(() => {
          
        })
      
        it('checks all checkboxes with one command', () => {
          cy.get('#flexCheckDefault input[type="checkbox"]')
            .as('checkboxes')
            .check()
      
          cy.get('#flexCheckDefault')
            .each(checkbox => {
              expect(checkbox[151].checked ).to.equal(true).check()
            })
        })
      })  
       //cy.get('.form-check-input:checked[type=checkbox]').check()
    })
    
  })
