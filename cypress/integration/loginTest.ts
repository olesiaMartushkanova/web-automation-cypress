import testData from '../support/testData.json';
import {
  enterUsername,
  enterPassword,
  submitLogin,
  verifyUserIsLoggedIn
} from '../support/pages/loginPage';

describe('Login to Tradify', () => {
  it('Successfull Login', () => {
    cy.wait(100);
    enterUsername(testData.userDetails.username);
    enterPassword();
    submitLogin();
    verifyUserIsLoggedIn(testData.userDetails.displayName);
  });
});
//test