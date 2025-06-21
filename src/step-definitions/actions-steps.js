import { Given, When } from '@wdio/cucumber-framework';
import pages from '../po/index';

Given('A {string} page', (pageName) => {
  return pages(pageName).open();
});

When('I input with {string} and {string}', (username, password) => pages('login').login(username, password));

When('I clear username and password', () => {
  pages('login').clearInput('all');
});

When('I click the "Login" button', () => pages('login').submitBtn.click());
