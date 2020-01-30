import testData from '../support/testData.json';
import {
    clickSignUpBtn,
    enterEmail,
    fillMainDetails,
    fillIndustryDetails,
    fillCompanyDetails,
    clickNextBtn,
    clickConfirm,
    selectAccountingPackage
} from '../support/pages/sighUpPages';

describe('Successfull Sign up', () => {
    it('User goes through all steps and creates an account', () => {
        cy.visit(testData.urls.startPage);

        cy.wait(3000);
        clickSignUpBtn();
        enterEmail();
        clickConfirm();
        cy.wait(3000);

        fillMainDetails('OlesiaTestAuto',
            'Automation with Cypress',
            'Q1w2e3r4');
        clickConfirm();

        fillIndustryDetails('Electrical & AV',
            'A friend or work mate',
            '0223333333');
        clickConfirm();
        cy.wait(3000);


        fillCompanyDetails('5', 'Job management');
        clickNextBtn();

        selectAccountingPackage('None');
        clickNextBtn();
    });
});