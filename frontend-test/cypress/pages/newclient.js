/// <reference types="cypress"/>

// elements
const pageTitle = 'New Client'
const names = ':nth-child(1) > input'
const email = ':nth-child(2) > input'
const telephone= ':nth-child(3) > input'   
const savebutton='.blue'
const backbutton = '[href="/clients"]'
const Logoutbutton = '.user > .btn'
  
//functions
function CheckNewClientTitle(cy){
    cy.contains(pageTitle)
}

function Backbutton(cy){
    cy.get(backbutton).click()
}

function Logout (cy){
    cy.get(Logoutbutton).click()    
}

function Savebutton(cy){
    cy.get(savebutton).click()
}

// export
module.exports = {
    Backbutton,
    Logout,
    Savebutton,

    names,
    email,
    telephone
  } 