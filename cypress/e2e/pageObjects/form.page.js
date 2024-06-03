//Rainers Strads IT2

export default class Form {
    firstname;
    lastname;
    email;
    gender;
    phone;
    day;
    month;
    year;
    subject;
    imgName;

    constructor(firstname, lastname, email, gender, phone, day, month, year, subject, imgName) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.day = day;
        this.month = month;
        this.year = year;
        this.subject = subject;
        this.imgName = imgName;
    } 

    fillData() {
        //Basic personal info
        cy.get('#firstName').type(this.firstname);
        cy.get('#lastName').type(this.lastname);
        cy.get('#userEmail').type(this.email);
        if(this.gender == 'male') {
            cy.get('#gender-radio-1').check({force: true});
        }
        else if(this.gender == 'female') {
            cy.get('#gender-radio-2').check({force: true});
        }
        else {
            cy.get('#gender-radio-3').check({force: true});
        }
        cy.get('#userNumber').type(this.phone);

        //Dynamic date picker
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select(this.year.toString());
        cy.get('.react-datepicker__month-select').select(this.month);
        cy.get('.react-datepicker__day').each(($element) => {
            const ariaLabel = $element.attr('aria-label');
            const ariaPieces = ariaLabel.split(',');
            if (ariaPieces[1].includes(this.month) && $element.text() == this.day) {
              cy.wrap($element).click();
            }
        });

        //Subject selection
        cy.get('.subjects-auto-complete__value-container').type(this.subject);
        cy.get('.subjects-auto-complete__menu').click();

        //Non-customisable option
        cy.get('#hobbies-checkbox-3').check({force: true});

        //Picture from link
        cy.get('#uploadPicture').selectFile('cypress/e2e/files/' + this.imgName);
        
        //Non-customisable options
        cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
        cy.get('.css-1n7v3ny-option').click();
        cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
        cy.get('.css-1n7v3ny-option').click();

        cy.log('Data filled successfully');
    }

    submit() {
        cy.get('#submit').click();
    }

    assertData() {
        //Assert first and last name
        cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').should((value) => {
            expect(value).to.include(this.firstname);
            expect(value).to.include(this.lastname);
        });

        //Assert email
        cy.get('tbody > :nth-child(2) > :nth-child(2)').contains(this.email, {matchCase: false});

        //Assert gender
        cy.get('tbody > :nth-child(3) > :nth-child(2)').contains(this.gender, {matchCase: false});

        //Assert mobile
        cy.get('tbody > :nth-child(4) > :nth-child(2)').contains(this.phone);

        //Assert date
        cy.get('tbody > :nth-child(5) > :nth-child(2)').invoke('text').should((value) => {
            expect(value).to.include(this.year);
            expect(value).to.include(this.month);
            expect(value).to.include(this.day);
        });

        //Assert subject
        cy.get('tbody > :nth-child(6) > :nth-child(2)').contains(this.subject);

        //Assert image name
        cy.get('tbody > :nth-child(8) > :nth-child(2)').contains(this.imgName);

        cy.log('Data asserted successfully');
    }
}