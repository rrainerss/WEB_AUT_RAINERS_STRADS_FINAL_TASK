import Url from '../pageObjects/url.page';
const url = new Url();

describe('template spec', () => {
  it('passes', () => {
    url.visitForm();

    cy.get('#firstName').type('Firstname');
    cy.get('#lastName').type('Lastname');
    cy.get('#userEmail').type('user@email.com');
    cy.get('#gender-radio-1').check({force: true});
    cy.get('#userNumber').type('12345678');

    //dont forget to create a method of this with passed dates
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__month-select').select('February');
    // cy.get(`.react-datepicker__day[aria-label*="${targetMonth}"]`).contains(targetDay).click();

    cy.get('.react-datepicker__day').each(($element) => {
      const targetMonth = 'February';
      const targetDay = '28';
      const ariaLabel = $element.attr('aria-label');
      const ariaPieces = ariaLabel.split(',');
      cy.log(ariaPieces[1]);
      if (ariaPieces[1].includes(targetMonth) && $element.text() == targetDay) {
        cy.wrap($element).click();
        cy.log('Element clicked: ' + $element);
      }
    });

    cy.get('.subjects-auto-complete__value-container').type('Economics');
    cy.get('.subjects-auto-complete__menu').click();
    cy.get('#hobbies-checkbox-3').check({force: true});

    //files
    cy.get('#uploadPicture').selectFile('cypress/e2e/files/fast.png');

    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('.css-1n7v3ny-option').click();

    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('.css-1n7v3ny-option').click();

    cy.get('#submit').click();
  })
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});
})

// cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
