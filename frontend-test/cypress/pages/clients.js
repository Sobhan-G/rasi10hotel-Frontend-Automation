/// <reference types="cypress" />

 // elements
 const pageTitle = 'Clients'
 const createclientBtn = 'h2 > .btn'
 const backBtn = ':nth-child(3) > .btn'
 const LogoutBtn = '.user > .btn'

 const menuClient = ':nth-child(1) > .action > img'
 const editClient = '.menu > :nth-child(1)'
 const deleteClient = '.menu > :nth-child(2)'
  
 //functions
function CheckClientsTitle(cy){
    cy.contains(pageTitle)
}

function ClickMenuClient(cy){
    cy.get(menuClient).click()
}

function ClickEditClient(cy){
    cy.get(editClient).click()
}

function ClickDeleteClient(cy){
    cy.get(deleteClient).click()
}

function ClickCreateClientBtn(cy){
    cy.get(createclientBtn).click()
}

function Backbutton(cy){
    cy.get(backBtn).click()
}

function Logout(cy){
    cy.get(LogoutBtn).click()
}

// export
module.exports = {
    CheckClientsTitle,
    ClickMenuClient,
    ClickEditClient,
    ClickDeleteClient,


    ClickCreateClientBtn,
    Backbutton,
    Logout
  } 

 