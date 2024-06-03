//Rainers Strads IT2

export default class Url {
    visitForm() {
        //I know theres a cypress config file for URLs but this makes more sense to me
        cy.visit('https://demoqa.com/automation-practice-form');
    }
}