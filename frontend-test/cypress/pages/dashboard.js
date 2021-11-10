/// <reference types="cypress" />

//elements
const checkTitledashboardpage ='Testers Hotel'
const logoutbutton = ('.user > .btn')

//actions / functions
function CheckDashboardPage(cy){
   cy.title().should('eq',checkTitledashboardpage)
}

function PerformLogout (cy, ContentToConfirm){
   cy.get(logoutbutton).click()
   cy.contains(ContentToConfirm)
}

// export
module.exports = {
   CheckDashboardPage,
   PerformLogout
} 
