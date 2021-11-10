/// <reference types="cypress" />


// testsuite-test

describe('perfom a valid login', function(){

    it('testcase-test', function(){

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
      cy.get('.user > .btn').click()
      

      
    })

})