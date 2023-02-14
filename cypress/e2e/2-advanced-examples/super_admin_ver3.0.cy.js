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
      
    // Cde to collect grid

     

    cy.get('input[type="checkbox"]')
     .each(($elem, index) => {
       if(index === 0) {
        cy.wrap($elem).click({force:true});  
       } else if (index === 3 ) {
        cy.wrap($elem).click({force:true});
       } else if ( index === 17) {
        cy.wrap($elem).click({force:true});
       }else if ( index === 44){
        cy.wrap($elem).click({force:true});
       } else if ( index === 62){
        cy.wrap($elem).click({force:true});
       }else if (index ===73){
        cy.wrap($elem).click({force:true});
       }else if (index === 80){
        cy.wrap($elem).click({force:true});
       }else if ( index === 93){
        cy.wrap($elem).click({force:true});
       }    
  });

 cy.contains("Next").click()

   cy.wait (2000)
// CDE to shair grid 
   cy.get('input[type="checkbox"]')
   .each(($elem, index) => {
     if(index === 0) {
      cy.wrap($elem).click({force:true});  
     }else if (index === 3) {
      cy.wrap($elem).click({force:true});
     } else if (index === 17){
      cy.wrap($elem).click({force:true});
     } else if (index === 44 )
     cy.wrap($elem).click({force:true});
    })

    cy.wait(2000)

    cy.contains("Next").click()

    cy.wait(2000)

    cy.get('.form-control').type("abhishek@yopmail.com")

    cy.wait(2000)

    cy.contains("Next").click()

     })
    
  })
