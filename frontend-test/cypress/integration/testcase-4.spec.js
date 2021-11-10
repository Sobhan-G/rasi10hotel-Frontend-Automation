/// <reference types="cypress" />


// testsuite-4

/*before 
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
*/

describe('log in and and make a reservation', function(){

    it('testcase-4', function(){

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
      cy.get(':nth-child(4) > .btn').click()
      cy.wait(1000)
      cy.get('h2 > .btn').click()
      cy.contains('New Reservation')
      cy.wait(1000)
      cy.get(':nth-child(1) > input').type('2021-11-04')
      cy.get(':nth-child(2) > input').type('2021-11-11')
      cy.get(':nth-child(3) > select').select('sobhan (#3)')
      cy.get(':nth-child(4) > select').select('Floor 1, Room 102')
      cy.get(':nth-child(5) > select').select('ID: 3')

      cy.get('.blue').click()
      cy.wait(3000)
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(2000)
      cy.get('.user > .btn').click()
      cy.contains('Login') 
      
      
     
    })

    /*
    After cy.wait(2000)
          cy.get('.user > .btn').click()
          cy.contains('Login') 
          */
    

})