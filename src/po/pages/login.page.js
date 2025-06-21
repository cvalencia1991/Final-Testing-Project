import BasePage from './base.page';

export default class LoginPage extends BasePage {
  constructor() {
    super('/');
  }

  get inputUserName() {
    return $('#user-name');
  }

  get inputPassword() {
    return $('#password');
  }

  get submitBtn() {
    return $('#login-button');
  }

  get errorEl() {
    return $('.error-message-container');
  }

  async login(username, inputPassword) {
    await this.inputUserName.setValue(username);
    await this.inputPassword.setValue(inputPassword);
  }

  async clearInput(...fields) {
    if (fields.includes('username')) {
      await this.inputUserName.click();
      await browser.keys(['Control', 'a']);
      await browser.keys('Backspace');
    }

    if (fields.includes('password')) {
      await this.inputPassword.click();
      await browser.keys(['Control', 'a']);
      await browser.keys('Backspace');
    }
  }
}
