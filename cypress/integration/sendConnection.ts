import testData from '../support/testData.json';
import {
    enterUsername,
    enterPassword,
    submitLogin
} from '../support/pages/loginPage';
import {
    navigateToConnections,
    clickSendConnectionInvite,
    clickSendInvite,
    verifyError,
    enterInviteEmail,
    goToTab,
    clickPlusBtn,
    findBinding,
    search,
    closeSendInviteWindow
} from '../support/pages/connectionsPage';

describe('Send Invitation to Connect', () => {
    beforeEach('Login to Tradify', () => {
        enterUsername(testData.userDetails.connectionLogin);
        enterPassword();
        submitLogin();
        cy.wait(1000)
        .scrollTo('bottom');
        navigateToConnections();
        clickSendConnectionInvite();
        cy.wait(3000);
    });

    it('Send invite with an empty email field', () => {
        clickSendInvite();
        verifyError('Enter at least one email address');
        closeSendInviteWindow();
    });

    it('Send invite with invalid email', () => {
        enterInviteEmail('invalidEmail');
        cy.wait(1000);
        clickSendInvite();
        verifyError(" The email address  is not in the correct format, are you sure you've entered it correctly? ");
        closeSendInviteWindow();
    });

    it('Send invite with valid email', () => {
        const email = `smoketest+sentwithCypress${Math.random()}@tradify.com`;
        enterInviteEmail(email);
        clickPlusBtn();
        cy.wait(1500);
        clickSendInvite();
        cy.wait(2000);
        goToTab('Pending');
        search(email);
        findBinding(email);
    });

    it('Send invite with multiple valid emails', () => {
        const emails = [`smoketest+sentwithCypress${Math.random()}@tradifyhq.com`,
            `smoketest+sentwithCypress${Math.random()}@tradifyhq.com`
        ];

        emails.forEach(element => {
            enterInviteEmail(element);
            clickPlusBtn();
            cy.wait(1500);
        });
        clickSendInvite();

        emails.forEach(element => {
            cy.wait(2000);
            goToTab('Pending');
            search(element);
            findBinding(element);
            cy.scrollTo('top').focused().clear();
        });
    });
});