//Rainers Strads IT2

import {
    validateLogin,
}
from '../qa/reusable2.cy';

describe("Appointment History", () => {

    it("form", () => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");

        //Login page
        validateLogin();

        //Menu
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper').should('have.class', 'active');
        cy.get(':nth-child(4) > a').click();

        //Body content
        cy.get('.col-sm-12 > p').should('be.visible').and('have.text', 'No appointment.');
    });
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
  });