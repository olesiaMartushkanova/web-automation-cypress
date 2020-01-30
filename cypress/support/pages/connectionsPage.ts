const CONNECTIONS_NAVIGATE_TAB = '.site-menu-title';
const SEND_CONNECTION_INVITE_BTN = '.btn.btn-black.btn-xl.ng-binding'
const EMAIL_FIELD = '.wj-form-control.ng-valid';
const BUTTON = '.btn-cancel';
const ERROR_MESSAGE = '.validation-error-label';
const PLUS_BTN = '.wb-plus';
const TAB = '.ng-binding';
const SEARCH_FIELD = '.search-box';

export const navigateToConnections = () => {
    cy.get(CONNECTIONS_NAVIGATE_TAB).contains('Connections').click();
};

export const clickSendConnectionInvite = () => {
    cy.get(SEND_CONNECTION_INVITE_BTN).contains('Add a Connection').click();
};

export const enterInviteEmail = (email: string) => {
    cy.get(EMAIL_FIELD).type(email);
};

export const clickSendInvite = () => {
    cy.get(BUTTON).contains('Send Invitation To Connect').click();
};

export const verifyError = (errorText: string) => {
    cy.get(ERROR_MESSAGE).should('contain', errorText);
};

export const clickPlusBtn = () => {
    cy.get(PLUS_BTN).click();
};

export const goToTab = (tab: string) => {
    cy.get(TAB).contains(tab).click();
};

export const findBinding = (find: string) => {
    cy.get('.ng-binding.ng-scope').contains(find)
        .should('be.visible');
};

export const search = (searchFor: string) => {
    cy.get(SEARCH_FIELD).type(searchFor + '{enter}');
};

export const closeSendInviteWindow = () => {
    cy.contains('Close').click();
};