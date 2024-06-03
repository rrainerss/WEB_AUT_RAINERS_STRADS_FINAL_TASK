//Rainers Strads IT2

export const validateLogin = () => {
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#txt-username').should('have.value', 'John Doe');
    cy.get('#txt-password').should('have.value', 'ThisIsNotAPassword');
    cy.get('#btn-login').click();
};