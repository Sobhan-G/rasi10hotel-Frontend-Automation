///<reference types="cypress"/>


 // elements
 const containsnroom = 'New Room'
 const category  = ':nth-child(1) > select'
 const number =  ':nth-child(2) > input'
 const floor =  ':nth-child(3) > input'
 const available = '.checkbox'
 const price = ':nth-child(5) > input'
 const feature = ':nth-child(6) > select'
 
 const savebutton='.blue'
 const backbutton = '[href="/rooms"]'
 const Logoutbutton = '.user > .btn'
 
 //functions
function CheckTitleofNewRoompage(cy){
    cy.contains(containsnroom)
}

function ClickBackBtn(cy){
    cy.get(backbutton).click()
}

function Logout (cy){
    cy.get(Logoutbutton).click()    
}

function ClickSaveBtn(cy){
    cy.get(savebutton).click()
}

function SetCategory(cy, value){
    cy.get(category).select(value)
}

function SetNumber(cy, value){
    cy.get(number).type(value)
}

function SetFloor(cy, value){
    cy.get(floor).type(value)
}

function SetAvailible(cy){
    cy.get(available).click()
}

function SetPrice(cy, value){
    cy.get(price).type(value)
}

function SetFeature(cy, value){
    cy.get(feature).select(value)
}

// export
module.exports = {
    SetCategory,
    SetNumber,
    SetFloor,
    SetAvailible,
    SetPrice,
    SetFeature,
    ClickSaveBtn,
    ClickBackBtn,
    Logout,
    CheckTitleofNewRoompage
  } 