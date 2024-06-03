//Rainers Strads IT2

import Url from '../pageObjects/url.page';
import Form from '../pageObjects/form.page';

describe('Form Test', () => {
  it('passes', () => {
    const url = new Url();
    const form = new Form(
      'Firstname',
      'Lastname',
      'user@email.com',
      'male',
      '12345678',
      28,
      'February',
      1930,
      'Economics',
      'fast.png'
    );

    url.visitForm();
    form.fillData();
    form.submit();
    form.assertData();
  })
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});
})

// cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
