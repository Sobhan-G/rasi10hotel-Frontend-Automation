/// <reference types="cypress" />


// testsuite-5

describe('login and delete a client', function(){

    it('testcase-5', function(){

      cy.visit('http://localhost:3000/login?redirect=%2Flogin')
      cy.title('Testers Hotel')
      cy.wait(1000)
      cy.contains('Login')
      cy.wait(1000)
      cy.get(':nth-child(1) > input').type('tester01')
      cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
      cy.wait(1000)
      cy.get('.btn').click()
      cy.wait(1000)
      cy.contains('Tester Hotel Overview')
      cy.wait(1000)
      cy.get('.blocks > :nth-child(2) > .btn').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .action > img').click()
      cy.contains('Delete').click()
      cy.wait(1000)


      
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(1000)
      cy.get('.user > .btn').click()
      cy.wait(1000)
      cy.contains('Login')
      



      
     
    })

})