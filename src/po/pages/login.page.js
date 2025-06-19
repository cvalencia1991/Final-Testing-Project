import BasePage from './base.page';

export default class LoginPage extends BasePage {
  constructor() {
    super('https://www.saucedemo.com/');
  }

  get iputUserName() {
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

  login(username, inputPassword) {
    this.iputUserName.setValue(username);
    this.inputPassword.setValue(inputPassword);
  }

  clearInput(name) {
    switch (name) {
      case 'username':
        this.iputUserName.clearValue();
        break;
      case 'password':
        this.inputPassword.clearValue();
        break;
      case 'all':
        this.iputUserName.clearValue();
        this.inputPassword.clearValue();
        break;
      default:
        throw new Error('wrong input name element');
    }
  }
}
