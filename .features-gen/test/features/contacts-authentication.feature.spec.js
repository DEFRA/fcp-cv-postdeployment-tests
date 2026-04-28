// Generated from: test/features/contacts-authentication.feature
import { test } from "../../../test/features/steps/fixtures.js";

test.describe('Consolidated View Contacts Authentication page', () => {

  test('Contacts with no authentication data set should have all table data shown as NOT SET.', { tag: ['@advanced', '@data-dependent', '@working'] }, async ({ Given, When, Then, contactsAuthenticationPage, page }) => { 
    await Given('I have gone to the \'Contacts Authentication\' page', null, { page }); 
    await When('I have selected the contact with CRN \'1111111400\'', null, { page }); 
    await Then('all table entries should be shown as \'(Not set)\'', null, { contactsAuthenticationPage }); 
  });

  test('Contacts who cannot be found in the authentication database should have all table data shown as NOT FOUND.', { tag: ['@advanced', '@data-dependent', '@require-mock-update'] }, async ({ Given, When, Then, contactsAuthenticationPage, page }) => { 
    await Given('I have selected a contact who is not in the authentication database', null, { contactsAuthenticationPage }); 
    await When('I navigate to the Contacts Authentication page', null, { page }); 
    await Then('all table entries should be shown as \'NOT FOUND\'', null, { contactsAuthenticationPage }); 
  });

  test('Authentication data should be displayed correctly', { tag: ['@advanced', '@data-dependent'] }, async ({ Given, When, Then, contactsAuthenticationPage, page }) => { 
    await Given('I have selected the contact with CRN \'1111111200\'', null, { page }); 
    await When('I navigate to the Contacts Authentication page', null, { page }); 
    await Then('All table entries should be shown as follows', {"dataTable":{"rows":[{"cells":[{"value":"label"},{"value":"value"}]},{"cells":[{"value":"Memorable Date"},{"value":"09/11/2024"}]},{"cells":[{"value":"Memorable Event"},{"value":"claro"}]},{"cells":[{"value":"Memorable Place"},{"value":"Castle Treutel"}]},{"cells":[{"value":"Updated Date"},{"value":"2024-12-31T09:58:05.370Z"}]}]}}, { contactsAuthenticationPage }); 
  });

  test('The "Retrieved At" field is accurate', { tag: ['@advanced'] }, async ({ Given, Then, contactsAuthenticationPage, page }) => { 
    await Given('I have gone to the \'Contacts Authentication\' page', null, { page }); 
    await Then('the Retrieved At field is equal to todays date and current time', null, { contactsAuthenticationPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('test/features/contacts-authentication.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@advanced","@data-dependent","@working"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I have gone to the 'Contacts Authentication' page","stepMatchArguments":[{"group":{"start":20,"value":"Contacts Authentication","children":[]}}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I have selected the contact with CRN '1111111400'","stepMatchArguments":[{"group":{"start":38,"value":"1111111400","children":[]}}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then all table entries should be shown as '(Not set)'","stepMatchArguments":[{"group":{"start":38,"value":"(Not set)","children":[]}}]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@advanced","@data-dependent","@require-mock-update"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I have selected a contact who is not in the authentication database","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I navigate to the Contacts Authentication page","stepMatchArguments":[{"group":{"start":18,"value":"Contacts Authentication","children":[]}}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then all table entries should be shown as 'NOT FOUND'","stepMatchArguments":[{"group":{"start":38,"value":"NOT FOUND","children":[]}}]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":["@advanced","@data-dependent"],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I have selected the contact with CRN '1111111200'","stepMatchArguments":[{"group":{"start":38,"value":"1111111200","children":[]}}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I navigate to the Contacts Authentication page","stepMatchArguments":[{"group":{"start":18,"value":"Contacts Authentication","children":[]}}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then All table entries should be shown as follows","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":27,"tags":["@advanced"],"steps":[{"pwStepLine":25,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given I have gone to the 'Contacts Authentication' page","stepMatchArguments":[{"group":{"start":20,"value":"Contacts Authentication","children":[]}}]},{"pwStepLine":26,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the Retrieved At field is equal to todays date and current time","stepMatchArguments":[]}]},
]; // bdd-data-end