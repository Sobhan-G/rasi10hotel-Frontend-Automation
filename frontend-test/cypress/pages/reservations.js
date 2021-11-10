/// <reference types="cypress" />

 // elements
 const pageTitle = 'Reservations'
 const createresevation = 'h2 > .btn'
 const backbtn = ':nth-child(3) > .btn'
 const logoutbtn = '.user > .btn'

 const menuBtn = 'img'
 const editBtn = '.menu > :nth-child(1)'
 const deleteBtn = '.menu > :nth-child(2)'
  
 //functions
function CheckReservationsTitle(cy){
    cy.contains(pageTitle)
}

function ClickCreate(cy){
    cy.get(createresevation).click()
}

function ClickEdit(cy){
    cy.get(editBtn).click()
}

function ClickMenu(cy){
    cy.get(menuBtn).click()
}

function ClickDelete(cy){
    cy.get(deleteBtn).click()   
}

function Backbutton(cy){
    cy.get(backbtn).click()
}

function Logout(cy){
    cy.get(logoutbtn).click()    
}

// export
module.exports = {
    CheckReservationsTitle,
    ClickCreate,
    ClickEdit,
    ClickMenu,
    ClickDelete,
    Backbutton,
    Logout
  } 