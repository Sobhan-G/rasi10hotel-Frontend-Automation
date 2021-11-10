/// <reference types="cypress" />
 
// elements
 const pageTitle = 'Bills'
 const createNewBill = 'h2 > .btn'
 const backbutton = ':nth-child(3) > .btn'
 const logoutbutton = '.user > .btn'
 
 const menuButton = 'img'
 const editButton = '.menu > :nth-child(1)'
 const deleteButton = '.menu > :nth-child(2)'
  
 //functions
function CheckBillsTitle(cy){
    cy.contains(pageTitle)
}

function CreateNewBill(cy){
    cy.get(createNewBill).click()
}

function DeleteBill(cy){
    cy.get(deleteButton).click()
}

function EditBill(cy){
    cy.get(editButton).click()  
}

function MenuBill(cy){
    cy.get(menuButton).click()  
}

function BackBtn(cy){
    cy.get(backbutton).click()
}

function Logout(cy){
    cy.get(logoutbutton).click()
}

// export
module.exports = {
    CheckBillsTitle,
    CreateNewBill,
    DeleteBill,
    EditBill,
    MenuBill,
    BackBtn,
    Logout
  } 