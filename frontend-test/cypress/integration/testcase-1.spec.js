/// <reference types="cypress" />


// testsuite-1

describe('perfom a valid login and create a room', function(){

    it('testcase-1', function(){

      cy.visit('http://localhost:3000')
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
      cy.get(':nth-child(1) > .btn').click()
      cy.get('h2 > .btn').click()
      cy.contains('New Room')
      cy.get(':nth-child(1) > select').select('double')
      cy.get(':nth-child(2) > input').type('2')
      cy.get(':nth-child(3) > input').type('10')
      cy.get(':nth-child(5) > input').type('9500')
      cy.get('[value="penthouse"]')
      cy.get('.blue').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(1000)
      cy.get('.user > .btn').click()
      cy.wait(1000)
      cy.contains('Login')



      
     
    })

})