import testData from '../testData.json';

const USERNAME_FIELD = '.tx-username';
const PASSWORD_FIELD = '.tx-password';
const LOGIN_BTN = '#login';
const DISPLAY_NAME = '.site-menu-partner-session-label';

export const enterUsername = (username: string) => {
    cy.get(USERNAME_FIELD).type(username)
        .should('have.value', username)
};

export const enterPassword = () => {
    const password = testData.userDetails.password;
    cy.get(PASSWORD_FIELD).type(password)
        .should('have.value', password);
};

export const submitLogin = () => {
    cy.get(LOGIN_BTN).click();
};

export const verifyUserIsLoggedIn = (userName: string) => {
    cy.get(DISPLAY_NAME).wait(1000)
        .get(DISPLAY_NAME).invoke('text')
        .should('contain', userName);
};