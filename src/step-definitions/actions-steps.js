import { Given, When } from '@wdio/cucumber-framework';
import pages from '../po/index';

Given('A {string} page', (pageName) => {
  return pages(pageName).open();
});

When('I login with {string} and {string}', (username, password) => {
  return pages('login').login(username, password);
});

When(/^I clear "(username|password)"(?: and "(password|username)")?$/, async (field1, field2) => {
  const loginPage = pages('login');
  const fields = [field1, field2].filter(Boolean);
  await loginPage.clearInput(...fields);
});

When('I click the "Login" button', () => {
  return pages('login').submitBtn.click();
});
