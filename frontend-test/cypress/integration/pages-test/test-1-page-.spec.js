/// <reference types="cypress" />

import * as targets from '../../targets/targets.js'
import * as indexfunc from '../../pages/indexpage.js'
import * as overviewfunc from '../../pages/hotel-overview.js'
import * as roomfunc from '../../pages/rooms.js'
import * as newroomfunc from '../../pages/newroom.js'

// testcase1-pages
describe('perfom a valid login and create a room', function(){
    it('testcase-1-pages', function(){

        cy.visit(targets.base_url)
        cy.wait(1000)
        
        indexfunc.CheckTitleofIndexpage(cy)
        cy.wait(1000)
        indexfunc.PerformValidLogin(cy,targets.username,targets.password)
        cy.wait(2000)
        
        overviewfunc.CheckDashboardTitle(cy)
        overviewfunc.ClickRooms(cy)
        cy.wait(3000)

        roomfunc.CheckTitleofRoompage(cy)
        roomfunc.ClickBtnCreateRoom(cy)
        cy.wait(3000)

        newroomfunc.CheckTitleofNewRoompage(cy)
        newroomfunc.SetCategory(cy, "double")
        newroomfunc.SetNumber(cy, 2)
        newroomfunc.SetFloor(cy, 99)
        newroomfunc.SetAvailible(cy)
        newroomfunc.SetPrice(cy, 500)
        newroomfunc.SetFeature(cy, "penthouse")
        newroomfunc.ClickSaveBtn(cy)
        cy.wait(3000)

        roomfunc.ClickBtnBack(cy)
        cy.wait(2000)

        overviewfunc.Logout(cy)
        cy.wait(2000)
        
    })

})