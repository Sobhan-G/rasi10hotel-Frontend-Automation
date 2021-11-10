/// <reference types="cypress" />

//elements

const titleofIndexpage ='Login'
const usernameTextfield=':nth-child(1) > input'
const passwordTextfield =':nth-child(2) > input'
const loginbutton='.btn'

//actions / functions

function CheckTitleofIndexpage(cy){
    cy.contains(titleofIndexpage)
}

function PerformValidLogin(cy, username, password){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextfield).type(password)
    cy.get(loginbutton).click()
}

// export
module.exports = {
    CheckTitleofIndexpage,
    PerformValidLogin
} 
