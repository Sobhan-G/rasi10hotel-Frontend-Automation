/// <reference types="cypress" />


// testsuite-2

describe('login and create a new client and logout', function(){

    it('testcase-2', function(){

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
      cy.contains('Create Client')
      cy.get('h2 > .btn').click()
      cy.get(':nth-child(1) > input').type('Sobhan')
      cy.get(':nth-child(2) > input').type('Gilani.sobhan@gmail.com')
      cy.get(':nth-child(3) > input').type('073-5950450')
      cy.get('.blue').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(1000)
      cy.get('.user > .btn').click()
      cy.contains('Login') 
      
      
     
    })

})