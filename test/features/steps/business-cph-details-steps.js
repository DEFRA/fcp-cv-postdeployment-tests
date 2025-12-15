import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

// -------------------------------
// TABLE & DETAILS PANE EXPECTATIONS
// -------------------------------

Then(
  /^I see a CPH table to the left with column headers for '([^']+)'$/,
  function (headers) {
    // TODO
  }
)

Then(/^the first row of the CPH table is selected$/, function () {
  // TODO
})

Then(
  /^I see a CPH Details pane on the right with a title 'CPH Number: ' concatenated with (.*)$/,
  function (cphNumber) {
    // TODO
  }
)

Then(/^the CPH Details pane has fields for '([^']+)'$/, function (fields) {
  // TODO
})

Then(/^the CPH Details pane has the field data populated$/, function () {
  // TODO
})

Then(/^I see the the correct list of CPH's as follows$/, function (dataTable) {
  // TODO
})

Then(
  /^I see the correctly ordered list of CPH's as follows$/,
  function (dataTable) {
    // TODO
  }
)

// -------------------------------
// TABLE SELECTION
// -------------------------------

When(/^When I select a new CPH from the CPH Table$/, function () {
  // TODO
})

When(/^I select the CPH '([^']+)'$/, function (cph) {
  // TODO
})

Then(/^the details in the right-hand side pane update$/, function () {
  // TODO
})

// -------------------------------
// EMPTY STATES
// -------------------------------

Then(/^I see an empty CPH Details pane$/, function () {
  // TODO
})

// -------------------------------
// DETAILS VALIDATION (DATA TABLES)
// -------------------------------

Then(/^then I see the following CPH Details$/, function (dataTable) {
  // TODO
})

Then(
  /^I see the CPH Details pane has fields for '([^']+)'$/,
  function (fields) {
    // TODO
  }
)
