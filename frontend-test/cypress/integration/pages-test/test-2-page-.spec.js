/// <reference types="cypress" />

import * as targets from '../../targets/targets.js'
import * as indexfunc from '../../pages/indexpage.js'
import * as overviewfunc from '../../pages/hotel-overview.js'
import * as clientsFunc from '../../pages/clients.js'
import * as newClientFunc from '../../pages/newclient.js'


// testcase2-pages
describe('perfom a valid login and creat a new Client', function(){
    it('testcase-2-pages', function(){

        cy.visit(targets.base_url)
        cy.wait(1000)
        
        indexfunc.CheckTitleofIndexpage(cy)
        cy.wait(1000)
        indexfunc.PerformValidLogin(cy,targets.username,targets.password)
        cy.wait(2000)
        
        overviewfunc.CheckDashboardTitle(cy)
        overviewfunc.ClickClients(cy)
        cy.wait(3000)

        clientsFunc.CheckClientsTitle(cy)
        cy.wait(3000)
        clientsFunc.ClickCreateClientBtn(cy)
        cy.wait(3000)

        cy.get(newClientFunc.names).type("sobhan")
        cy.get(newClientFunc.email).type("sobhan@nisse.se")
        cy.get(newClientFunc.telephone).type("+467047985121")
        newClientFunc.Savebutton(cy)
        cy.wait(3000)

        clientsFunc.Backbutton(cy)
        cy.wait(3000)

        overviewfunc.Logout(cy)
        cy.wait(2000)

    })

})