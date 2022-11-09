it('login_page!', function () {

    cy.visit('https://radxup-colectiv-uat.azurewebsites.net/participant-login')

    cy.title().should('eq','Home | RADxUP.')

    cy.wait(2000)

    cy.get(".participant-signin").click()

    cy.wait(2000)

    cy.get('input[value=English]').should('be.visible').should('be.checked')

    cy.wait(2000)

    //cy.get('input[Value=Spanish').Should('be.visible').should('not.be.checked').click()

    cy.wait(2000)

    cy.get('button').click()

    cy.wait(2000)

    cy.get('input[name=email]').should('be.visible').should('be.enabled').type("jack@yopmail.com")

    cy.wait(2000)

    cy.get('input[name=password]').should('be.visible').should('be.enabled').type("Test@123")

    cy.wait(2000)

    cy.get('button').click()

  })


describe('lpogin_page', function () {

  it('participant_screen', function () {

    cy.wait(2000)

    cy.wait(2000)

    cy.visit('https://radxup-colectiv-uat.azurewebsites.net/study-brief').click()

    cy.wait(3000)

    // cy.visit('https://radxup-colectiv-uat.azurewebsites.net/current-forms') .click()

    // cy.wait(3000)

    //  cy.visit('https://radxup-colectiv-uat.azurewebsites.net/complete-forms').click

    // cy.wait(3000)

    // cy.get("https://radxup-colectiv-uat.azurewebsites.net/invitations").click()


  })
})