describe('email_login' , function(){

    it("email_login" , () =>{

        cy.visit("https://radxup-colectiv-uat.azurewebsites.net/")

        cy.wait(2000)

        cy.get("#formBasicEmail").type("abhishek@yopmail.com");

        cy.wait(2000);
        
        cy.get('[type="submit"]').click();

        cy.wait(2000)

        cy.get(':nth-child(1) > .mt-5 > .Common_cardBodystyleStudy__VjSY5').click()
        
        cy.get(2000)

        cy.contains("e-Informed Consent Form").click()

        cy.wait(5000)

        cy.contains("Build New e-ICF").click()

        cy.wait(2000)

       // cy.get('.form-select').click()
       // cy.get('.form-select').select('Adult e-ICF ').should('have.value','Adult e-ICF ')


        cy.get('input[name="icfType"]').select();
       
        
    })

})