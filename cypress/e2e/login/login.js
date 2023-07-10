import { Before, After, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Before(() => {
    cy.reload()
})

After(() => {
    cy.reload()
})

Given("I logged in on The MovieDB Web", () => {
    cy.visit('https://www.themoviedb.org')
    cy.get('.sub_media > .flex > .primary > li:nth-child(3) > a').click()
})

When("provide valid {string} and {string}", (userName, password)=>{
    cy.get('#username').type(userName)
    cy.get('#password').type(password)  
})

When("I log in as Following", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#username').type(element.userName).should('exist').and('be.visible');
        cy.get('#password').type(element.password).should('exist').and('be.visible');
    });
})

Then("click on submit button", ()=>{
    cy.get('#login_button').click().should('exist').and('be.visible');
})

And("verify title should be {string}", (title)=>{
    cy.contains(title).should('be.visible')
})