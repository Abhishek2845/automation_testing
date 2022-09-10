
// Test case of participant login 

describe('login_page', function () {
  
 
    //cy.visit('https://radxup-uat.azurewebsites.net/invitations')
    it("Login into the Radxup Super Admin", () => {
      cy.visit("https://radxup-uat.azurewebsites.net/");
      cy.get("#formbasicemail").type("var17@duke.edu");
      cy.wait(3000);
      cy.get('[type="submit"]').click();
    
      cy.title().should("eq", "Home | RADxUP.");
      cy.wait(2000);
      cy.contains("Study Management").click();
      cy.title().should("eq", "Study Management | RADxUP.");
      cy.wait(3000);
     
      //   cy.get(".auditTrail_auditDownload__908l_").click();
      //   cy.wait(4000);
      //   cy.contains("CDE Library Management").click();
    
      //   cy.get("#controlled-tab-example-tab-Draft").click();
      //   cy.wait(5000);
      //   cy.get("#controlled-tab-example-tab-Active").click();
      cy.get(".Common_newParticipantbtn__I3MgQ").click();
      cy.get("input[name=study_id]").type("SH23");
      cy.get("input[name=name]").type("Covid19");
      cy.get("input[name=awardee_org]").type("WHO2");
    
      cy.get("textarea[name=description]").type(
        "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes"
      );
      cy.get("#selectQuestion").select("My New Library 2.5.6");
      cy.get(".secondary").click();
      //   cy.get("#flexCheckDefault").should("be.visible").click();
      //   cy.wait(2000);
      //   cy.get("#flexCheckDefault").should("be.visible").click();
      cy.get(":nth-child(1) > .justify-content-between > .d-flex > .form-check")
        .should("be.visible")
        .click();
      cy.wait(2000);
      cy.get(":nth-child(2) > .justify-content-between > .d-flex > .form-check")
        .should("be.visible")
        .click();
      cy.wait(2000);
      cy.get(".secondary").click();
      cy.wait(2000);
    
      cy.get(":nth-child(1) > .justify-content-between > .d-flex > .form-check")
        .should("be.visible")
        .click();
      cy.wait(2000);
      cy.get(":nth-child(2) > .justify-content-between > .d-flex > .form-check")
        .should("be.visible")
        .click();
      cy.wait(2000);
      cy.get(".secondary").click();
      cy.get("input[name=0]").type("javedrana234@yopmail.com");
      cy.wait(2000);
      cy.get("img[title=Add]").first().screenshot().click();
      cy.get("input[name=1]").type("javed234@yopmail.com");
      cy.wait(2000);
      cy.get("img[title=Add]").click();
      cy.wait(2000);
      //   cy.get("img[title=Remove]").click();
      cy.get(":nth-child(2) > .mt-2").click();
      cy.get("input[name=1]").type("javed234@yopmail.com");
      cy.wait(2000);
      cy.get(".secondary").click();
      cy.wait(2000);
      cy.get(".secondary").click();
      cy.wait(3000);
      cy.get(".modal-footer > .btn-primary").click();
      cy.location().then((loc) => {
        console.log(loc);
      });
      cy.wait(2000);
      cy.location().should((loc) => {
        expect(loc.href).to.include("/study-management/add");
      });
    });
   

   //cy.get(".flex-grow-1").click()

  })


