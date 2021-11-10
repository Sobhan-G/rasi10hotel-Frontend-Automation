/// <reference types="cypress" />

//elements
const checkTitleDashboardpage ='Testers Hotel'
const logoutbutton = '.user > .btn'
const roomspabutton = ':nth-child(1) > .btn'
const billpabutton = ':nth-child(3) > .btn'
const clientpabutton = '.blocks > :nth-child(2) > .btn'
const reservationpabutton = ':nth-child(4) > .btn'

//actions / functions
function CheckDashboardTitle(cy){
  cy.title().should('eq',checkTitleDashboardpage)
}

function Logout(cy){
  cy.get(logoutbutton).click()
}

function ClickRooms(cy){
  cy.get(roomspabutton).click()
}

function ClickBills(cy){
  cy.get(billpabutton).click()
}

function ClickClients(cy){
  cy.get(clientpabutton).click()
}

function ClickReservations(cy){
  cy.get(reservationpabutton).click()
}

// export
module.exports = {
  CheckDashboardTitle,
  Logout,
  ClickRooms,
  ClickBills,
  ClickClients,
  ClickReservations
} 