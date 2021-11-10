/// <reference types="cypress" />


// testsuite-3

describe('log in and and create a new bill then logout', function(){

    it('testcase-3', function(){

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
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(1000)
      cy.get('h2 > .btn').click()
      cy.contains('New Bill')
      cy.get('input').type('4500')
      cy.get('.checkbox').click()
      cy.wait(1000)
      
      cy.get('.blue').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(1000)
      cy.get('.user > .btn').click()
      cy.contains('Login') 
      
      
     
    })

})