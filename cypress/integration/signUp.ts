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
import {
    verifyUserIsLoggedIn
} from '../support/pages/loginPage';

describe('Successfull Sign up', () => {
    it('User goes through all steps and creates an account', () => {
        const newUser = `CypressUser${Math.random().toString(5)}`;
    
        clickSignUpBtn();
        enterEmail(`smoketest+olesiaautocy${Math.random().toString(5)}@tradifyhq.com`);
        clickConfirm();
        cy.wait(3000);

        fillMainDetails('OlesiaTestAuto', newUser, 'New Zealand');
        cy.wait(500);
        clickConfirm();

        fillIndustryDetails('Electrical & AV',
            'A friend or work mate',
            '0223333333');
        clickConfirm();
        cy.wait(3000);

        fillCompanyDetails('5', 'Job management');
        clickNextBtn();

        selectAccountingPackage('None');
        cy.wait(500);
        clickNextBtn();
        cy.wait(500);

        verifyUserIsLoggedIn(newUser);
    });
});