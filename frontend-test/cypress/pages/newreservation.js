/// <reference types="cypress" />

// elements
const pageTitle = 'New Reservation'

const startdate=':nth-child(1) > input'
const enddate =':nth-child(2) > input'
const chooseclient= ':nth-child(3) > select'
const chooseroom= ':nth-child(4) > select'
const amountbill= ':nth-child(5) > select'

const savebutton='.blue'
const backbutton = '[href="/reservations"]'
const logoutbutton = '.user > .btn'
 
 //functions
function CheckNewReservationsTitle(cy){
    cy.contains(pageTitle)
}

function ClickBackBtn(cy){
    cy.get(backbutton).click()
}

function Logout(cy){
    cy.get(logoutbutton).click()
}

function ClickSaveBtn(cy){
    cy.get(savebutton).click()
}

// export
module.exports = {
    CheckNewReservationsTitle,
    ClickBackBtn,
    Logout,
    ClickSaveBtn,

    startdate,
    enddate,
    chooseclient,
    chooseroom,
    amountbill
  } 