/// <reference types="cypress" />

import * as targets from '../../targets/targets.js'
import * as indexfunc from '../../pages/indexpage.js'
import * as overviewfunc from '../../pages/hotel-overview.js'
import * as clientsFunc from '../../pages/clients.js'

// testcase5-pages
describe('login and delete a client', function(){
    it('testcase-5-pages', function(){

        cy.visit(targets.base_url)
        cy.wait(1000)
        
        indexfunc.CheckTitleofIndexpage(cy)
        cy.wait(1000)
        indexfunc.PerformValidLogin(cy,targets.username,targets.password)
        cy.wait(2000)
        
        overviewfunc.CheckDashboardTitle(cy)     
        overviewfunc.ClickClients(cy)
        cy.wait(3000)

        clientsFunc.ClickMenuClient(cy)
        cy.wait(1000)
        clientsFunc.ClickDeleteClient(cy)
        cy.wait(1000)

        clientsFunc.Backbutton(cy)
        cy.wait(3000)

        overviewfunc.Logout(cy)
        cy.wait(2000)
    })

})