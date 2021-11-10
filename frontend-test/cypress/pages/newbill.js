/// <reference types="cypress" />
 
// elements
const pageTitle = 'New Bill'
const logoutbutton = '.user > .btn'

const amount = 'input' 
const paidbox='.checkbox' 

const backbutton = '[href="/bills"]'
const savebutton='.blue'

 
//functions
function CheckNewBillTitle(cy){
    cy.contains(pageTitle)
}

function Backbutton(cy){
    cy.get(backbutton).click()
}

function Logout(cy){
    cy.get(logoutbutton).click()    
}

function Savebutton(cy){
    cy.get(savebutton).click()
}

// export
module.exports = {
    CheckNewBillTitle,
    Backbutton,
    Logout,
    Savebutton,

    amount,
    paidbox
  } 