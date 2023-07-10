// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import loginData from '../fixtures/users.json'

describe('login test', () => {
    
    beforeEach(() => {
        cy.visit('https://www.themoviedb.org/')
    })
    it.only('login with valid credential', () => {
      cy.get('.sub_media > .flex > .primary > li:nth-child(3) > a').click()
      cy.get('#username').type(loginData.valid.username).should('exist').and('be.visible');
      cy.get('#password').type(loginData.valid.password).should('exist').and('be.visible');
      cy.get('#login_button', 
      // { timeout: 70000 }
      ).click().should('exist').and('be.visible');
  
      // Assert that user is logged in successfully
      cy.contains('Account').should('be.visible');
    });
});