/// <reference types="cypress" />

import * as targets from '../../targets/targets.js'
import * as indexfunc from '../../pages/indexpage.js'
import * as overviewfunc from '../../pages/hotel-overview.js'
import * as reservFunc from '../../pages/reservations.js'
import * as newReservFunc from '../../pages/newreservation.js'

// testcase4-pages
describe('log in and and make a reservation', function(){
    it('testcase-4-pages', function(){

        cy.visit(targets.base_url)
        cy.wait(1000)
        
        indexfunc.CheckTitleofIndexpage(cy)
        cy.wait(1000)
        indexfunc.PerformValidLogin(cy,targets.username,targets.password)
        cy.wait(2000)
        
        overviewfunc.CheckDashboardTitle(cy)      
        overviewfunc.ClickReservations(cy)
        cy.wait(3000)

        reservFunc.ClickCreate(cy)
        cy.wait(3000)

        cy.get(newReservFunc.startdate).type('2021-11-04')
        cy.get(newReservFunc.enddate).type('2021-11-11')
        cy.get(newReservFunc.chooseclient).select(1)
        cy.get(newReservFunc.chooseroom).select(1)
        cy.get(newReservFunc.amountbill).select(1)
        newReservFunc.ClickSaveBtn(cy)
        cy.wait(3000)

        reservFunc.Backbutton(cy)
        cy.wait(3000)

        overviewfunc.Logout(cy)
        cy.wait(2000)
    })

})