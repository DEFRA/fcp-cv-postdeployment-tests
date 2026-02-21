// Generated from: test/features/business-agreements.feature
import { test } from '../../../test/features/steps/fixtures.js'

test.describe('Consolidated View Agreements page', () => {
  test(
    'Agreements page opens with correct components displayed.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({ Given, Then, And, businessAgreementsPage, page }) => {
      await Given('I have gone to the Agreements page', null, { page })
      await Then(
        "I see an 'Agreements' table with column headers as follows 'Reference, Year, Agreement Name, Type, Start Date, End Date, Status'",
        null,
        { page }
      )
      await And(
        'each Agreements table has an option to view the record',
        null,
        { businessAgreementsPage }
      )
      await And('I see a Search box', null, { page })
    }
  )

  test(
    'Agreement Details page opens with correct components displayed.',
    { tag: ['@basic', '@possible-vi-test'] },
    async ({
      Given,
      When,
      Then,
      And,
      businessAgreementDetailsPage,
      businessAgreementsPage,
      page
    }) => {
      await Given('I have gone to the Agreements page', null, { page })
      await When("I click the 'View' link next to an agreement", null, {
        businessAgreementsPage
      })
      await Then("I see a header with 'Agreement Name' as the title", null, {
        businessAgreementDetailsPage
      })
      await And(
        "I see underneath the header the following fields 'Agreement Ref., Type, Scheme Year, Status, Start Date, End Date'",
        null,
        { businessAgreementDetailsPage }
      )
      await And(
        "I see an 'payment schedules' table with column headers as follows 'Sheet, Parcel, Description, Action Area (ha), Action Length (m), Action Units, Parcel Area (ha), Payment Schedule, Commitment Term'",
        null,
        { page }
      )
      await And(
        'I see an option to go back to see the main screen with Agreements table',
        null,
        { businessAgreementDetailsPage }
      )
    }
  )

  test(
    'The back arrow on the Agreement Details screen takes the user back to the main Agreements screen',
    { tag: ['@intermediate'] },
    async ({ Given, When, Then, businessAgreementDetailsPage, page }) => {
      await Given('I have gone to the Agreement Details page', null, { page })
      await When("I click the 'Back to Agreements list' link", null, {
        businessAgreementDetailsPage
      })
      await Then('I am on the Agreements page', null, { page })
    }
  )

  test(
    'Searching for a partially matching string in the Reference column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessAgreementsPage, page }) => {
      await Given("I have selected the business with SBI '121428499'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await When("I enter '786' in the search box", null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Reference' }, { value: '8579482786' }] },
              { cells: [{ value: 'Year' }, { value: '2025' }] },
              {
                cells: [{ value: 'Agreement Name' }, { value: 'BPS AGREEMENT' }]
              },
              {
                cells: [
                  { value: 'Type' },
                  { value: 'Countryside Stewardship (MT)' }
                ]
              },
              { cells: [{ value: 'Start Date' }, { value: '03/01/2023' }] },
              { cells: [{ value: 'End Date' }, { value: '03/04/2026' }] },
              { cells: [{ value: 'Status' }, { value: 'EXPIRED' }] }
            ]
          }
        },
        { businessAgreementsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Reference' },
                  { value: '8579482786, 8097698033, 2617418139' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025, 2025, 2024' }] },
              {
                cells: [
                  { value: 'Agreement Name' },
                  { value: 'BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT' }
                ]
              },
              {
                cells: [
                  { value: 'Type' },
                  {
                    value:
                      'Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '03/01/2023, 28/12/2024, 05/10/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '03/04/2026, 22/08/2028, 14/09/2026' }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'EXPIRED, WITHDRAWN, EXPIRED' }
                ]
              }
            ]
          }
        },
        { businessAgreementsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Year column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessAgreementsPage, page }) => {
      await Given("I have selected the business with SBI '121428499'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await When("I enter '2024' in the search box", null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Reference' }, { value: '2617418139' }] },
              { cells: [{ value: 'Year' }, { value: '2025' }] },
              {
                cells: [{ value: 'Agreement Name' }, { value: 'BPS AGREEMENT' }]
              },
              {
                cells: [
                  { value: 'Type' },
                  { value: 'Higher Level Stewardship' }
                ]
              },
              { cells: [{ value: 'Start Date' }, { value: '05/10/2022' }] },
              { cells: [{ value: 'End Date' }, { value: '14/09/2026' }] },
              { cells: [{ value: 'Status' }, { value: 'EXPIRED' }] }
            ]
          }
        },
        { businessAgreementsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Reference' },
                  { value: '8579482786, 8097698033, 2617418139' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025, 2025, 2024' }] },
              {
                cells: [
                  { value: 'Agreement Name' },
                  { value: 'BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT' }
                ]
              },
              {
                cells: [
                  { value: 'Type' },
                  {
                    value:
                      'Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '03/01/2023, 28/12/2024, 05/10/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '03/04/2026, 22/08/2028, 14/09/2026' }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'EXPIRED, WITHDRAWN, EXPIRED' }
                ]
              }
            ]
          }
        },
        { businessAgreementsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Agreement Name column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessAgreementsPage, page }) => {
      await Given("I have selected the business with SBI '121428499'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await When("I enter 'ELS' in the search box", null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Reference' }, { value: '8097698033' }] },
              { cells: [{ value: 'Year' }, { value: '2025' }] },
              {
                cells: [{ value: 'Agreement Name' }, { value: 'ELS AGREEMENT' }]
              },
              { cells: [{ value: 'Type' }, { value: 'Basic Payment Scheme' }] },
              { cells: [{ value: 'Start Date' }, { value: '28/12/2024' }] },
              { cells: [{ value: 'End Date' }, { value: '022/08/2028' }] },
              { cells: [{ value: 'Status' }, { value: 'WITHDRAWN' }] }
            ]
          }
        },
        { businessAgreementsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Reference' },
                  { value: '8579482786, 8097698033, 2617418139' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025, 2025, 2024' }] },
              {
                cells: [
                  { value: 'Agreement Name' },
                  { value: 'BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT' }
                ]
              },
              {
                cells: [
                  { value: 'Type' },
                  {
                    value:
                      'Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '03/01/2023, 28/12/2024, 05/10/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '03/04/2026, 22/08/2028, 14/09/2026' }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'EXPIRED, WITHDRAWN, EXPIRED' }
                ]
              }
            ]
          }
        },
        { businessAgreementsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Type column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessAgreementsPage, page }) => {
      await Given("I have selected the business with SBI '121428499'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await When("I enter '(MT)' in the search box", null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              { cells: [{ value: 'Reference' }, { value: '8579482786' }] },
              { cells: [{ value: 'Year' }, { value: '2025' }] },
              {
                cells: [{ value: 'Agreement Name' }, { value: 'BPS AGREEMENT' }]
              },
              {
                cells: [
                  { value: 'Type' },
                  { value: 'Countryside Stewardship (MT)' }
                ]
              },
              { cells: [{ value: 'Start Date' }, { value: '03/01/2023' }] },
              { cells: [{ value: 'End Date' }, { value: '03/04/2026' }] },
              { cells: [{ value: 'Status' }, { value: 'EXPIRED' }] }
            ]
          }
        },
        { businessAgreementsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Reference' },
                  { value: '8579482786, 8097698033, 2617418139' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025, 2025, 2024' }] },
              {
                cells: [
                  { value: 'Agreement Name' },
                  { value: 'BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT' }
                ]
              },
              {
                cells: [
                  { value: 'Type' },
                  {
                    value:
                      'Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '03/01/2023, 28/12/2024, 05/10/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '03/04/2026, 22/08/2028, 14/09/2026' }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'EXPIRED, WITHDRAWN, EXPIRED' }
                ]
              }
            ]
          }
        },
        { businessAgreementsPage }
      )
    }
  )

  test(
    'Searching for a partially matching string in the Status column filters correctly',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, When, Then, And, businessAgreementsPage, page }) => {
      await Given("I have selected the business with SBI '121428499'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await When("I enter 'EXPIRED' in the search box", null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Reference' },
                  { value: '8579482786, 2617418139' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025, 2024' }] },
              {
                cells: [
                  { value: 'Agreement Name' },
                  { value: 'PS AGREEMENT, BPS AGREEMENT' }
                ]
              },
              {
                cells: [
                  { value: 'Type' },
                  {
                    value:
                      'Countryside Stewardship (MT),Higher Level Stewardship'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '03/01/2023, 05/10/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '03/04/2026, 14/09/2026' }
                ]
              },
              { cells: [{ value: 'Status' }, { value: 'EXPIRED, EXPIRED' }] }
            ]
          }
        },
        { businessAgreementsPage }
      )
      await When('I enter a blank value in the search box', null, { page })
      await And('Press the Enter key', null, { page })
      await Then(
        'I see the the correct list of Agreements as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Reference' },
                  { value: '8579482786, 8097698033, 2617418139' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025, 2025, 2024' }] },
              {
                cells: [
                  { value: 'Agreement Name' },
                  { value: 'BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT' }
                ]
              },
              {
                cells: [
                  { value: 'Type' },
                  {
                    value:
                      'Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '03/01/2023, 28/12/2024, 05/10/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '03/04/2026, 22/08/2028, 14/09/2026' }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'EXPIRED, WITHDRAWN, EXPIRED' }
                ]
              }
            ]
          }
        },
        { businessAgreementsPage }
      )
    }
  )

  test(
    'For a business with no Agreements, a warning message is shown indicating that there are no Agreements',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, page }) => {
      await Given("I have selected the business with SBI '1000000000'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await Then("I see the 'Agreements' table is empty", null, { page })
      await And(
        "I see a warning message 'We didn't find any data to show at this time' under the 'Agreements' table",
        null,
        { page }
      )
    }
  )

  test(
    'The Agreements table is ordered by Year, most recent first',
    { tag: ['@advanced', '@data-dependent'] },
    async ({ Given, Then, And, businessAgreementsPage, page }) => {
      await Given("I have selected the business with SBI '121428499'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await Then(
        'I see the correct data in the Agreements table, ordered by most recent year first, as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Reference' },
                  { value: '8579482786, 8097698033, 2617418139' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025, 2025, 2024' }] },
              {
                cells: [
                  { value: 'Agreement Name' },
                  { value: 'BPS AGREEMENT , ELS AGREEMENT , BPS AGREEMENT' }
                ]
              },
              {
                cells: [
                  { value: 'Type' },
                  {
                    value:
                      'Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '03/01/2023, 28/12/2024, 05/10/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '03/04/2026, 22/08/2028, 14/09/2026' }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'EXPIRED, WITHDRAWN, EXPIRED' }
                ]
              }
            ]
          }
        },
        { businessAgreementsPage }
      )
    }
  )

  test(
    'The Agreements data is correct including Action Area (ha) and Parcel Area (ha) calculated as ha as m2 divided by 10,000',
    { tag: ['@advanced', '@data-dependent'] },
    async ({
      Given,
      When,
      Then,
      And,
      businessAgreementDetailsPage,
      businessAgreementsPage,
      page
    }) => {
      await Given("I have selected the business with SBI '121428499'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await Then(
        'I see the correct data in the Agreements table, ordered by most recent year first, as follows',
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Reference' },
                  { value: '8579482786, 8097698033, 2617418139' }
                ]
              },
              { cells: [{ value: 'Year' }, { value: '2025, 2025, 2024' }] },
              {
                cells: [
                  { value: 'Agreement Name' },
                  { value: 'BPS AGREEMENT,ELS AGREEMENT,BPS AGREEMENT' }
                ]
              },
              {
                cells: [
                  { value: 'Type' },
                  {
                    value:
                      'Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Start Date' },
                  { value: '03/01/2023, 28/12/2024, 05/10/2022' }
                ]
              },
              {
                cells: [
                  { value: 'End Date' },
                  { value: '03/04/2026, 22/08/2028, 14/09/2026' }
                ]
              },
              {
                cells: [
                  { value: 'Status' },
                  { value: 'EXPIRED, WITHDRAWN, EXPIRED' }
                ]
              }
            ]
          }
        },
        { businessAgreementsPage }
      )
      await When(
        "I click the 'View' link next to the agreement with reference '8579482786'",
        null,
        { businessAgreementsPage }
      )
      await Then(
        "I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending",
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [{ value: 'Sheet' }, { value: 'HFUTNN, KQYCHH, SNXADR' }]
              },
              { cells: [{ value: 'Parcel' }, { value: '4704, 2883, 4847' }] },
              {
                cells: [
                  { value: 'Description' },
                  {
                    value:
                      'Tondeo auctus adopto quas vociferor conicio solium. , Aduro attonbitus trans taceo asperiores vereor tempora. , Aveho desipio comis cubitum cui apostolus summa.'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Action Area (ha)' },
                  { value: '0.982, 1.2899, 2.1875' }
                ]
              },
              {
                cells: [
                  { value: 'Action Length (m)' },
                  { value: '43, null, null' }
                ]
              },
              { cells: [{ value: 'Action Units' }, { value: '7, 79, null' }] },
              {
                cells: [
                  { value: 'Parcel Area (ha)' },
                  { value: '1.6975, 2.3073, 2.01' }
                ]
              },
              {
                cells: [
                  { value: 'Payment Schedule' },
                  {
                    value:
                      '29/11/2023-21/09/2026, 18/07/2020-16/09/2026, 24/05/2021-07/08/2025'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Commitment Term' },
                  {
                    value:
                      '20/07/2019-25/01/2025, 11/08/2017-30/09/2028, 04/01/2022-17/05/2025'
                  }
                ]
              }
            ]
          }
        },
        { businessAgreementDetailsPage }
      )
      await And(
        'The screen data for Action Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.',
        null,
        { businessAgreementDetailsPage }
      )
      await And(
        'The screen data for Parcel Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.',
        null,
        { businessAgreementDetailsPage }
      )
    }
  )

  test(
    "The Agreement Details table is ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending",
    { tag: ['@advanced', '@data-dependent', '@require-mock-update'] },
    async ({
      Given,
      When,
      Then,
      And,
      businessAgreementDetailsPage,
      businessAgreementsPage,
      page
    }) => {
      await Given("I have selected the business with SBI '121428499'", null, {
        page
      })
      await And('I am on the Agreements page', null, { page })
      await When(
        "I click the 'View' link next to the agreement with reference '1980748'",
        null,
        { businessAgreementsPage }
      )
      await Then(
        "I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending",
        {
          dataTable: {
            rows: [
              { cells: [{ value: 'label' }, { value: 'value' }] },
              {
                cells: [
                  { value: 'Sheet' },
                  { value: 'AA3261, AA3261, TL3261, TL3261, ZZ8877, ZZ8877' }
                ]
              },
              {
                cells: [
                  { value: 'Parcel' },
                  { value: '6780, 6781, 1234, 1234, 2134, 2134' }
                ]
              },
              {
                cells: [
                  { value: 'Description' },
                  {
                    value:
                      'CAHL1 - Pollen, CAHL1 - Pollen, SCR1 - Create Scrub, SCR2 - Create Scrub, PRF1 - Variable rate, PRF1 - Variable rate'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Action Area (ha)' },
                  { value: '0.35, 12.5, 18.7, 1.6, 0, 0' }
                ]
              },
              {
                cells: [
                  { value: 'Action Length (m)' },
                  { value: 'null, null, null, null, null, 1' }
                ]
              },
              {
                cells: [
                  { value: 'Action Units' },
                  { value: 'null, null, null, null, 730, null' }
                ]
              },
              {
                cells: [
                  { value: 'Parcel Area (ha)' },
                  { value: '14.1629, 34.2854, 25.595,14.1629, 34.2854, 25.595' }
                ]
              },
              {
                cells: [
                  { value: 'Payment Schedule' },
                  {
                    value:
                      '01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2025-31/08/2026,01/09/2026-31/08/2027'
                  }
                ]
              },
              {
                cells: [
                  { value: 'Commitment Term' },
                  {
                    value:
                      '01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2026-31/08/2027,01/09/2025-31/08/2026,01/09/2026-31/08/2027'
                  }
                ]
              }
            ]
          }
        },
        { businessAgreementDetailsPage }
      )
    }
  )
})

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [
    ({}, use) => use('test/features/business-agreements.feature'),
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
        textWithKeyword: 'Given I have gone to the Agreements page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 6,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see an 'Agreements' table with column headers as follows 'Reference, Year, Agreement Name, Type, Start Date, End Date, Status'",
        stepMatchArguments: [
          { group: { start: 10, value: 'Agreements', children: [] } },
          {
            group: {
              start: 60,
              value:
                'Reference, Year, Agreement Name, Type, Start Date, End Date, Status',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 7,
        keywordType: 'Outcome',
        textWithKeyword:
          'And each Agreements table has an option to view the record',
        stepMatchArguments: []
      },
      {
        pwStepLine: 10,
        gherkinStepLine: 8,
        keywordType: 'Outcome',
        textWithKeyword: 'And I see a Search box',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 13,
    pickleLine: 11,
    tags: ['@basic', '@possible-vi-test'],
    steps: [
      {
        pwStepLine: 14,
        gherkinStepLine: 12,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Agreements page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 15,
        gherkinStepLine: 13,
        keywordType: 'Action',
        textWithKeyword: "When I click the 'View' link next to an agreement",
        stepMatchArguments: [
          { group: { children: [] }, parameterTypeName: 'int' }
        ]
      },
      {
        pwStepLine: 16,
        gherkinStepLine: 14,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see a header with 'Agreement Name' as the title",
        stepMatchArguments: [
          { group: { start: 21, value: 'Agreement Name', children: [] } }
        ]
      },
      {
        pwStepLine: 17,
        gherkinStepLine: 15,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see underneath the header the following fields 'Agreement Ref., Type, Scheme Year, Status, Start Date, End Date'",
        stepMatchArguments: [
          {
            group: {
              start: 50,
              value:
                'Agreement Ref., Type, Scheme Year, Status, Start Date, End Date',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 18,
        gherkinStepLine: 16,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see an 'payment schedules' table with column headers as follows 'Sheet, Parcel, Description, Action Area (ha), Action Length (m), Action Units, Parcel Area (ha), Payment Schedule, Commitment Term'",
        stepMatchArguments: [
          { group: { start: 10, value: 'payment schedules', children: [] } },
          {
            group: {
              start: 67,
              value:
                'Sheet, Parcel, Description, Action Area (ha), Action Length (m), Action Units, Parcel Area (ha), Payment Schedule, Commitment Term',
              children: []
            }
          }
        ]
      },
      {
        pwStepLine: 19,
        gherkinStepLine: 17,
        keywordType: 'Outcome',
        textWithKeyword:
          'And I see an option to go back to see the main screen with Agreements table',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 22,
    pickleLine: 20,
    tags: ['@intermediate'],
    steps: [
      {
        pwStepLine: 23,
        gherkinStepLine: 21,
        keywordType: 'Context',
        textWithKeyword: 'Given I have gone to the Agreement Details page',
        stepMatchArguments: [
          { group: { start: 19, value: 'Agreement Details', children: [] } }
        ]
      },
      {
        pwStepLine: 24,
        gherkinStepLine: 22,
        keywordType: 'Action',
        textWithKeyword: "When I click the 'Back to Agreements list' link",
        stepMatchArguments: []
      },
      {
        pwStepLine: 25,
        gherkinStepLine: 23,
        keywordType: 'Outcome',
        textWithKeyword: 'Then I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 28,
    pickleLine: 26,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 29,
        gherkinStepLine: 27,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '121428499'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '121428499', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 30,
        gherkinStepLine: 28,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 31,
        gherkinStepLine: 29,
        keywordType: 'Action',
        textWithKeyword: "When I enter '786' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '786', children: [] } }
        ]
      },
      {
        pwStepLine: 32,
        gherkinStepLine: 30,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 33,
        gherkinStepLine: 39,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 34,
        gherkinStepLine: 40,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 35,
        gherkinStepLine: 41,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 38,
    pickleLine: 52,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 39,
        gherkinStepLine: 53,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '121428499'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '121428499', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 40,
        gherkinStepLine: 54,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 41,
        gherkinStepLine: 55,
        keywordType: 'Action',
        textWithKeyword: "When I enter '2024' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '2024', children: [] } }
        ]
      },
      {
        pwStepLine: 42,
        gherkinStepLine: 56,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 43,
        gherkinStepLine: 65,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 44,
        gherkinStepLine: 66,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 45,
        gherkinStepLine: 67,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 48,
    pickleLine: 78,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 49,
        gherkinStepLine: 79,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '121428499'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '121428499', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 50,
        gherkinStepLine: 80,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 51,
        gherkinStepLine: 81,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'ELS' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'ELS', children: [] } }
        ]
      },
      {
        pwStepLine: 52,
        gherkinStepLine: 82,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 53,
        gherkinStepLine: 91,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 54,
        gherkinStepLine: 92,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 55,
        gherkinStepLine: 93,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 58,
    pickleLine: 104,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 59,
        gherkinStepLine: 105,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '121428499'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '121428499', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 60,
        gherkinStepLine: 106,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 61,
        gherkinStepLine: 107,
        keywordType: 'Action',
        textWithKeyword: "When I enter '(MT)' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: '(MT)', children: [] } }
        ]
      },
      {
        pwStepLine: 62,
        gherkinStepLine: 108,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 63,
        gherkinStepLine: 117,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 64,
        gherkinStepLine: 118,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 65,
        gherkinStepLine: 119,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 68,
    pickleLine: 130,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 69,
        gherkinStepLine: 131,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '121428499'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '121428499', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 70,
        gherkinStepLine: 132,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 71,
        gherkinStepLine: 133,
        keywordType: 'Action',
        textWithKeyword: "When I enter 'EXPIRED' in the search box",
        stepMatchArguments: [
          { group: { start: 9, value: 'EXPIRED', children: [] } }
        ]
      },
      {
        pwStepLine: 72,
        gherkinStepLine: 134,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 73,
        gherkinStepLine: 143,
        keywordType: 'Action',
        textWithKeyword: 'When I enter a blank value in the search box',
        stepMatchArguments: []
      },
      {
        pwStepLine: 74,
        gherkinStepLine: 144,
        keywordType: 'Action',
        textWithKeyword: 'And Press the Enter key',
        stepMatchArguments: []
      },
      {
        pwStepLine: 75,
        gherkinStepLine: 145,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the the correct list of Agreements as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 78,
    pickleLine: 156,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 79,
        gherkinStepLine: 157,
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
        pwStepLine: 80,
        gherkinStepLine: 158,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 81,
        gherkinStepLine: 159,
        keywordType: 'Outcome',
        textWithKeyword: "Then I see the 'Agreements' table is empty",
        stepMatchArguments: [
          { group: { start: 11, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 82,
        gherkinStepLine: 160,
        keywordType: 'Outcome',
        textWithKeyword:
          "And I see a warning message 'We didn't find any data to show at this time' under the 'Agreements' table",
        stepMatchArguments: [
          {
            group: {
              start: 25,
              value: "We didn't find any data to show at this time",
              children: []
            }
          },
          { group: { start: 82, value: 'Agreements', children: [] } }
        ]
      }
    ]
  },
  {
    pwTestLine: 85,
    pickleLine: 163,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 86,
        gherkinStepLine: 164,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '121428499'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '121428499', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 87,
        gherkinStepLine: 165,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 88,
        gherkinStepLine: 166,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the correct data in the Agreements table, ordered by most recent year first, as follows',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 91,
    pickleLine: 177,
    tags: ['@advanced', '@data-dependent'],
    steps: [
      {
        pwStepLine: 92,
        gherkinStepLine: 178,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '121428499'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '121428499', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 93,
        gherkinStepLine: 179,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 94,
        gherkinStepLine: 180,
        keywordType: 'Outcome',
        textWithKeyword:
          'Then I see the correct data in the Agreements table, ordered by most recent year first, as follows',
        stepMatchArguments: []
      },
      {
        pwStepLine: 95,
        gherkinStepLine: 189,
        keywordType: 'Action',
        textWithKeyword:
          "When I click the 'View' link next to the agreement with reference '8579482786'",
        stepMatchArguments: [
          {
            group: { start: 62, value: '8579482786', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 96,
        gherkinStepLine: 190,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending",
        stepMatchArguments: []
      },
      {
        pwStepLine: 97,
        gherkinStepLine: 201,
        keywordType: 'Outcome',
        textWithKeyword:
          'And The screen data for Action Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.',
        stepMatchArguments: []
      },
      {
        pwStepLine: 98,
        gherkinStepLine: 202,
        keywordType: 'Outcome',
        textWithKeyword:
          'And The screen data for Parcel Area (ha) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha.',
        stepMatchArguments: []
      }
    ]
  },
  {
    pwTestLine: 101,
    pickleLine: 205,
    tags: ['@advanced', '@data-dependent', '@require-mock-update'],
    steps: [
      {
        pwStepLine: 102,
        gherkinStepLine: 206,
        keywordType: 'Context',
        textWithKeyword:
          "Given I have selected the business with SBI '121428499'",
        stepMatchArguments: [
          {
            group: { start: 39, value: '121428499', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 103,
        gherkinStepLine: 207,
        keywordType: 'Context',
        textWithKeyword: 'And I am on the Agreements page',
        stepMatchArguments: [
          { group: { start: 12, value: 'Agreements', children: [] } }
        ]
      },
      {
        pwStepLine: 104,
        gherkinStepLine: 208,
        keywordType: 'Action',
        textWithKeyword:
          "When I click the 'View' link next to the agreement with reference '1980748'",
        stepMatchArguments: [
          {
            group: { start: 62, value: '1980748', children: [] },
            parameterTypeName: 'int'
          }
        ]
      },
      {
        pwStepLine: 105,
        gherkinStepLine: 209,
        keywordType: 'Outcome',
        textWithKeyword:
          "Then I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending",
        stepMatchArguments: []
      }
    ]
  }
] // bdd-data-end
