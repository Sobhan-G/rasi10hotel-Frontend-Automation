/// <reference types="cypress" />

import * as targets from '../../targets/targets.js'
import * as indexfunc from '../../pages/indexpage.js'
import * as overviewfunc from '../../pages/hotel-overview.js'
import * as billsFunc from '../../pages/bills.js'
import * as newBillFunc from '../../pages/newbill.js'



// testcase3-pages
describe('log in and and create a new bill then logout', function(){
    it('testcase-3-pages', function(){

        cy.visit(targets.base_url)
        cy.wait(1000)
        
        indexfunc.CheckTitleofIndexpage(cy)
        cy.wait(1000)
        indexfunc.PerformValidLogin(cy,targets.username,targets.password)
        cy.wait(2000)
        
        overviewfunc.CheckDashboardTitle(cy)
        overviewfunc.ClickBills(cy)
        cy.wait(3000)

        billsFunc.CreateNewBill(cy)
        cy.wait(3000)

        cy.get(newBillFunc.amount).type(100)
        cy.get(newBillFunc.paidbox).click()
        newBillFunc.Savebutton(cy)
        cy.wait(3000)

        billsFunc.BackBtn(cy)
        cy.wait(3000)

        overviewfunc.Logout(cy)
        cy.wait(2000)

    })

})