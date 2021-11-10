/// <reference types="cypress" />

 // elements
 const containsNS = 'Rooms'
 const btnCreateRoom = 'h2 > .btn'
 const title = 'h2 > div'
 const menubutton =':nth-child(1) > .action > img'
 const deletebutton ='.menu > :nth-child(2)'
 const editbutton ='.menu > :nth-child(1)'
 const backbutton = ':nth-child(3) > .btn'
 const Logoutbutton = '.user > .btn'
  
 //functions
function CheckTitleofRoompage(cy){
    cy.contains(containsNS)
}

function ClickBtnCreateRoom(cy){
    cy.get(btnCreateRoom).click()
}

function DeleteRoom(cy){
    cy.get(menubutton).click()
    cy.get(deletebutton).click()
}
function EditRoom(cy){

    cy.get(menubutton).click()
    cy.get(editbutton).click()
    
}
function ClickBtnBack(cy){
    cy.get(backbutton).click()
}

function logout(cy){
    cy.get(Logoutbutton ).click()
   
}

// export
module.exports = {
    CheckTitleofRoompage,
    ClickBtnCreateRoom,
    ClickBtnBack
} 
