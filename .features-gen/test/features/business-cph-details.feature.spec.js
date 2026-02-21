// Generated from: test/features/business-cph-details.feature
import { test } from '../../../test/features/steps/fixtures.js'

test.describe('Consolidated View CPH Details page', () => {
  test(
    'Page opens with correct components displayed.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({
      Given,
      Then,
      And,
      businessApplicationsPage,
      businessCphDetailsPage,
      page
    }) => {
      await Given('I have gone to the CPH Details page', null, { page })
      await Then(
        "I see an 'CPH' table with column headers as follows 'CPH number, Parish, Start Date, End Date'",
        null,
        { page }
      )
      await And("the first item of the 'CPH' table is selected", null, { page })
      await And('I see a search box', null, { businessApplicationsPage })
      await And(
        "I see a CPH Details pane on the right with a title 'CPH Number: ' concatenated with CPH number"
      )
      await And(
        "the CPH Details pane has fields for 'Parish, Start Date, End Date, Coordinates (x, y), Species, Address'",
        null,
        { businessCphDetailsPage }
      )
      await And('the CPH Details pane has the field data populated', null, {
        businessCphDetailsPage
      })
    }
  )

  test(
    'Selecting a new CPH updates the details in the right-hand pane',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, businessCphDetailsPage, page }) => {
      await Given('I have gone to the CPH Details page', null, { page })
      await When('When I select a new CPH from the CPH Table', null, {
        businessCphDetailsPage
      })
      await Then('the details in the right-hand side pane update', null, {
        businessCphDetailsPage
      })
    }
  )

  test(
    'Searching for a partially matching string in the CPH number column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessCphDetailsPage, page }) => {
      await Given("I have selected the business with SBI '107183280'", null, {
        page
      })
      await And('I am on the CPH Details page', null, { page })
      await When("I enter '691' in the search box", null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CPH number' }, { value: '04/691/1023' }] },
              { cells: [{ value: 'Parish' }, { value: 'Pettistree' }] },
              { cells: [{ value: 'Start Date' }, { value: '05/10/2024' }] },
              { cells: [{ value: 'End Date' }, { value: '25/05/2027' }] }
            ]
          }
        },
        { businessCphDetailsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'CPH number' },
                  {
                    value:
                      '04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Parish' },
                  {
                    value:
                      'Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  {
                    value:
                      '05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023'
                  }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  {
                    value:
                      '25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023'
                  }
                ]
              }
            ]
          }
        },
        { businessCphDetailsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Parish column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessCphDetailsPage, page }) => {
      await Given("I have selected the business with SBI '107183280'", null, {
        page
      })
      await And('I am on the CPH Details page', null, { page })
      await When("I enter 'Charl' in the search box", null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CPH number' }, { value: '14/434/2708' }] },
              { cells: [{ value: 'Parish' }, { value: 'Charlton' }] },
              { cells: [{ value: 'Start Date' }, { value: '09/02/2024' }] },
              { cells: [{ value: 'End Date' }, { value: '31/12/9999' }] }
            ]
          }
        },
        { businessCphDetailsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'CPH number' },
                  {
                    value:
                      '04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Parish' },
                  {
                    value:
                      'Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  {
                    value:
                      '05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023'
                  }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  {
                    value:
                      '25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023'
                  }
                ]
              }
            ]
          }
        },
        { businessCphDetailsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Species field filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessCphDetailsPage, page }) => {
      await Given("I have selected the business with SBI '107183280'", null, {
        page
      })
      await And('I am on the CPH Details page', null, { page })
      await When("I enter 'SHEEP' in the search box", null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'CPH number' },
                  { value: '04/691/1023, 20/213/7336, 55/721/0654' }
                ]
              },
              {
                cells: [
                  { value: 'Parish' },
                  { value: 'Pettistree, Upton-upon-Severn, East Chiltington' }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '05/10/2024, 14/08/2022, 06/11/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '25/05/2027, 23/12/2025, 22/09/2024' }
                ]
              }
            ]
          }
        },
        { businessCphDetailsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'CPH number' },
                  {
                    value:
                      '04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Parish' },
                  {
                    value:
                      'Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  {
                    value:
                      '05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023'
                  }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  {
                    value:
                      '25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023'
                  }
                ]
              }
            ]
          }
        },
        { businessCphDetailsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Address field filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessCphDetailsPage, page }) => {
      await Given("I have selected the business with SBI '107183280'", null, {
        page
      })
      await And('I am on the CPH Details page', null, { page })
      await When("I enter 'DEMUM' in the search box", null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'CPH number' }, { value: '04/691/1023' }] },
              { cells: [{ value: 'Parish' }, { value: 'Pettistree' }] },
              { cells: [{ value: 'Start Date' }, { value: '05/10/2024' }] },
              { cells: [{ value: 'End Date' }, { value: '25/05/2027' }] }
            ]
          }
        },
        { businessCphDetailsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'CPH number' },
                  {
                    value:
                      '04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Parish' },
                  {
                    value:
                      'Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  {
                    value:
                      '05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023'
                  }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  {
                    value:
                      '25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023'
                  }
                ]
              }
            ]
          }
        },
        { businessCphDetailsPage }
      )
    }
  )

  test(
    'The CPH table is ordered by CPH number, then start date',
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({ Given, Then, And, page }) => {
      await Given("I have selected the business with SBI '107183280'", null, {
        page
      })
      await And('I am on the CPH Details page', null, { page })
      await Then('I see the the correctly ordered list of CPHs as follows', {
        dataTable: {
          rows: [
            { cells: [{ value: 'label' }, { value: 'value' }] },
            {
              cells: [
                { value: 'CPH number' },
                {
                  value:
                    '04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737'
                }
              ]
            },
            {
              cells: [
                { value: 'Parish' },
                {
                  value:
                    'Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme'
                }
              ]
            },
            {
              cells: [
                { value: 'Start Date' },
                {
                  value:
                    '05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023'
                }
              ]
            },
            {
              cells: [
                { value: 'End Date' },
                {
                  value:
                    '25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023'
                }
              ]
            }
          ]
        }
      })
    }
  )

  test(
    'If I select a business that has no CPH’s, a message is displayed in the table that indicates there are no CPH’s',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessCphDetailsPage, page }) => {
      await Given("I have selected the business with SBI '1000000000'", null, {
        page
      })
      await And('I am on the CPH Details page', null, { page })
      await Then("I see the 'CPH table' table is empty", null, { page })
      await And('I see an empty CPH Details pane', null, {
        businessCphDetailsPage
      })
      await And(
        "I see a warning message 'We didn't find any data to show at this time' under the 'CPH Details' table",
        null,
        { page }
      )
    }
  )

  test(
    'Check CPH data correctness',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessCphDetailsPage, page }) => {
      await Given("I have selected the business with SBI '107183280'", null, {
        page
      })
      await And('I am on the CPH Details page', null, { page })
      await Then(
        'I see the the correct list of CPHs as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'CPH number' },
                  {
                    value:
                      '04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Parish' },
                  {
                    value:
                      'Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  {
                    value:
                      '05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023'
                  }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  {
                    value:
                      '25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023'
                  }
                ]
              }
            ]
          }
        },
        { businessCphDetailsPage }
      )
      await When("I select the CPH '20/213/7336'", null, {
        businessCphDetailsPage
      })
      await Then(
        'then I see the following CPH Details',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Title' },
                  { value: 'CPH Number: 20/213/7336' }
                ]
              },
              { cells: [{ value: 'Parish' }, { value: 'Upton-upon-Severn' }] },
              { cells: [{ value: 'Start Date' }, { value: '14/08/2022' }] },
              { cells: [{ value: 'End Date' }, { value: '23/12/2025' }] },
              {
                cells: [
                  { value: 'Coordinates (x, y)' },
                  { value: '"176949, 434894"' }
                ]
              },
              {
                cells: [
                  { value: 'Species' },
                  {
                    value:
                      'PIG(S),CAMELIDS,POULTRY,OTHER,PIGEONS,CATTLE,GOAT(S),SHEEP'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Address' },
                  {
                    value:
                      '"TANTILLUS CATTUS CONDICO FARM, HERZOG WYND, UPPER SCHILLER, KF0 5GZ"'
                  }
                ]
              }
            ]
          }
        },
        { businessCphDetailsPage }
      )
    }
  )
})

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [
    ({}, use) => use('test/features/business-cph-details.feature'),
    { scope: 'test', box: true }
  ],
  $bddFileData: [({}, use) => use(bddFileData), { scope: 'test', box: true }]
})

const bddFileData = [
  // bdd-data-start
  {
    pwTestLine: 6,
    pickleLine: 4,
    tags: ['@basic', '@possible-vi-test'],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 5,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the CPH Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 6,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see an 'CPH' table with column headers as follows 'CPH number, Parish, Start Date, End Date'",
        stepMatchArguments: [
          { group: { start: 10, value: 'CPH', children: [] } },
          {
            group: {
              start: 53,
              value: 'CPH number, Parish, Start Date, End Date',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 7,
        keywordType: 'Outcome',
        textWithKeyword: "And the first item of the 'CPH' table is selected",
        stepMatchArguments: [
          { group: { start: 23, value: 'CPH', children: [] } }
        ]
      },
      {
        pwStepLine: 10,
        gherkinStepLine: 8,
        keywordType: 'Outcome',
        textWithKeyword: 'And I see a search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 11,
        gherkinStepLine: 9,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a CPH Details pane on the right with a title 'CPH Number: ' concatenated with CPH number",
        stepMatchArguments: [
          {
            group: {
              start: 51,
              value: "'CPH Number: '",
              children: [
                { children: [{ children: [] }] },
                {
                  start: 52,
                  value: 'CPH Number: ',
                  children: [{ children: [] }]
                }
              ]
            },
            parameterTypeName: 'string'
          }
        ]
      },
      {
        pwStepLine: 12,
        gherkinStepLine: 10,
        keywordType: 'Outcome',
        textWithKeyword:
          "And the CPH Details pane has fields for 'Parish, Start Date, End Date, Coordinates (x, y), Species, Address'",
        stepMatchArguments: [
          {
            group: {
              start: 37,
              value:
                'Parish, Start Date, End Date, Coordinates (x, y), Species, Address',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 13,
        gherkinStepLine: 11,
        keywordType: 'Outcome',
        textWithKeyword:
          'And the CPH Details pane has the field data populated',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 16,
    pickleLine: 14,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 17,
        gherkinStepLine: 15,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the CPH Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 18,
        gherkinStepLine: 16,
        keywordType: 'Action',
        textWithKeyword: 'When When I select a new CPH from the CPH Table',
        stepMatchArguments: []
      },
      {
        pwStepLine: 19,
        gherkinStepLine: 17,
        keywordType: 'Outcome',
        textWithKeyword: 'Then the details in the right-hand side pane update',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 22,
    pickleLine: 20,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 23,
        gherkinStepLine: 21,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107183280'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107183280', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 24,
        gherkinStepLine: 22,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the CPH Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 25,
        gherkinStepLine: 23,
        keywordType: 'Action',
        textWithKeyword: "When I enter '691' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '691', children: [] } }
        ]
      },
      {
        pwStepLine: 26,
        gherkinStepLine: 24,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 27,
        gherkinStepLine: 30,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 28,
        gherkinStepLine: 31,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 29,
        gherkinStepLine: 32,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 32,
    pickleLine: 40,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 33,
        gherkinStepLine: 41,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107183280'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107183280', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 34,
        gherkinStepLine: 42,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the CPH Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 35,
        gherkinStepLine: 43,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'Charl' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'Charl', children: [] } }
        ]
      },
      {
        pwStepLine: 36,
        gherkinStepLine: 44,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 37,
        gherkinStepLine: 50,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 38,
        gherkinStepLine: 51,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 39,
        gherkinStepLine: 52,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 42,
    pickleLine: 60,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 43,
        gherkinStepLine: 61,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107183280'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107183280', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 44,
        gherkinStepLine: 62,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the CPH Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 45,
        gherkinStepLine: 63,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'SHEEP' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'SHEEP', children: [] } }
        ]
      },
      {
        pwStepLine: 46,
        gherkinStepLine: 64,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 47,
        gherkinStepLine: 70,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 48,
        gherkinStepLine: 71,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 49,
        gherkinStepLine: 72,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 52,
    pickleLine: 80,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 53,
        gherkinStepLine: 81,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107183280'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107183280', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 54,
        gherkinStepLine: 82,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the CPH Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 55,
        gherkinStepLine: 83,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'DEMUM' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'DEMUM', children: [] } }
        ]
      },
      {
        pwStepLine: 56,
        gherkinStepLine: 84,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 57,
        gherkinStepLine: 90,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 58,
        gherkinStepLine: 91,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 59,
        gherkinStepLine: 92,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 62,
    pickleLine: 100,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 63,
        gherkinStepLine: 101,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107183280'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107183280', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 64,
        gherkinStepLine: 102,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the CPH Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 65,
        gherkinStepLine: 103,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correctly ordered list of CPHs as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 68,
    pickleLine: 111,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 69,
        gherkinStepLine: 112,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '1000000000'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '1000000000', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 70,
        gherkinStepLine: 113,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the CPH Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 71,
        gherkinStepLine: 114,
        keywordType: 'Outcome',
        textWithKeyword: "Then I see the 'CPH table' table is empty",
        stepMatchArguments: [
          { group: { start: 11, value: 'CPH table', children: [] } }
        ]
      },
      {
        pwStepLine: 72,
        gherkinStepLine: 115,
        keywordType: 'Outcome',
        textWithKeyword: 'And I see an empty CPH Details pane',
        stepMatchArguments: []
      },
      {
        pwStepLine: 73,
        gherkinStepLine: 116,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a warning message 'We didn't find any data to show at this time' under the 'CPH Details' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: "We didn't find any data to show at this time",
              children: []
            }
          },
          { group: { start: 82, value: 'CPH Details', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 76,
    pickleLine: 119,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 77,
        gherkinStepLine: 120,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '107183280'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '107183280', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 78,
        gherkinStepLine: 121,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the CPH Details page',
        stepMatchArguments: [
          { group: { start: 12, value: 'CPH Details', children: [] } }
        ]
      },
      {
        pwStepLine: 79,
        gherkinStepLine: 122,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I see the the correct list of CPHs as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 80,
        gherkinStepLine: 128,
        keywordType: 'Action',
        textWithKeyword: "When I select the CPH '20/213/7336'",
        stepMatchArguments: [
          { group: { start: 18, value: '20/213/7336', children: [] } }
        ]
      },
      {
        pwStepLine: 81,
        gherkinStepLine: 129,
        keywordType: 'Outcome',
        textWithKeyword: 'Then then I see the following CPH Details',
        stepMatchArguments: []
      }
    ]
  }
] // bdd-data-end
