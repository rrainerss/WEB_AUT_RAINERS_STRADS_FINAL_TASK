//Rainers Strads IT2

import {
    validateLogin,
}
from '../qa/reusable2.cy';

describe("Make Appointment", () => {

    it("form", () => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");

        //Login page
        validateLogin();

        //Appointment selection page input
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        cy.get('.input-group-addon').click();
        cy.get(':nth-child(5) > :nth-child(5)').click();
        cy.get('body').click();
        cy.get('#txt_comment').type('CURA Healthcare Service');

        //Appointment selection page check
        cy.get('#combo_facility').should('have.value', 'Seoul CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').should('be.checked');
        cy.get('#radio_program_medicaid').should('be.checked');
        cy.get('#txt_visit_date').should('not.have.value', '');
        cy.get('#txt_comment').should('have.value', 'CURA Healthcare Service');

        //Submit
        cy.get('#btn-book-appointment').click();
    });
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
  });