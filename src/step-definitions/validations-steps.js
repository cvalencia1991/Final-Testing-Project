import { Then } from '@wdio/cucumber-framework';
import pages from '../po/index';

Then('should see the error message {string}', async (errorMessage) => {
  const errorEl = await pages('login').errorEl;
  const regexErrorMessage = new RegExp(errorMessage, 'i');
  await expect(errorEl).toHaveText(regexErrorMessage);
});

Then('I should see {string} on the header of dashboard page', async (title) => {
  const titleHeader = await pages('dashboard').header.title;
  await expect(titleHeader).toHaveText(title);
});
