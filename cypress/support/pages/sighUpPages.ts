import testData from '../testData.json';

const SIGN_UP_LINK = 'Sign up';
const EMAIL_FIELD = '#Email';
const CONFIRM_SIGNUP_BTN = '#signup-button';
const FULL_NAME_FIELD = '#FullName';
const COMPANY_NAME_FIELD = '#CompanyName';
const PASSWORD_FIELD = '#Password';
const INDUSTRY = '#IndustryId';
const WHERE_YOU_HEARD = '#TrialSourceId';
const PHONE_FIELD = '#Phone';
const COMPANY_SIZE = '.company-size';
const IMPORTANT_FEATURE = '.wj-listbox-item';
const NEXT_BTN = '.btn-tradify';
const BINDING = '.ng-binding';
const COUNTRY = '#CountryId';

export const clickSignUpBtn = () => {
    cy.get(BINDING).contains(SIGN_UP_LINK).click();
};

export const enterEmail = (email: string) => {
    cy.get(EMAIL_FIELD).type(email);
};

export const clickConfirm = () => {
    cy.get(CONFIRM_SIGNUP_BTN).click();
};

export const fillMainDetails = (userName: string, companyName: string, country: string) => {
    cy.get(FULL_NAME_FIELD).type(userName)
        .get(COMPANY_NAME_FIELD).type(companyName)

        .get(COUNTRY)
        .find('option').contains(country)
        .then($els => $els.get(0).setAttribute('selected', "selected"))
        .parent()
        .trigger('change')

        .get(PASSWORD_FIELD).type(testData.userDetails.password);
};

export const fillIndustryDetails = (industry: string, heardSource: string, phone: string) => {
    cy.get(INDUSTRY).select(industry)
        .get(WHERE_YOU_HEARD).select(heardSource)
        .get(PHONE_FIELD).type(phone);
};

export const fillCompanyDetails = (companySize: string, feature: string) => {
    cy.get(COMPANY_SIZE).type(companySize)
        .get('button[tabindex="-1"]').eq(3).click()
        .get(IMPORTANT_FEATURE).contains(feature).click();
};

export const clickNextBtn = () => {
    cy.get(NEXT_BTN).click();
};

export const selectAccountingPackage = (accountingPackage: string) => {
    cy.contains(accountingPackage).click();
};