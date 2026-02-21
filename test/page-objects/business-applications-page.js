import { expect } from '@playwright/test'

export default class BusinessApplicationsPage {
  constructor(page) {
    this.page = page
    this.applicationsTable = page.getByTestId('applications-table')
    this.applicationDetailsPane = page.getByTestId('application-details-pane')
    this.applicationDetailsPaneTitleLabel = page.getByTestId(
      'application-details-pane-title-label'
    )
    this.applicationDetailsPaneApplicationIdLabel = page.getByTestId(
      'application-details-pane-application-id-label'
    )
    this.applicationDetailsPaneSchemeLabel = page.getByTestId(
      'application-details-pane-scheme-label'
    )
    this.applicationDetailsPaneYearLabel = page.getByTestId(
      'application-details-pane-year-label'
    )
    this.applicationDetailsPaneStatusLabel = page.getByTestId(
      'application-details-pane-status-label'
    )
    this.applicationDetailsPaneStatusPortalLabel = page.getByTestId(
      'application-details-pane-status-portal-label'
    )
    this.applicationDetailsPaneSubmittedDateLabel = page.getByTestId(
      'application-details-pane-submitted-date-label'
    )
    this.applicationDetailsPaneAgreementReferencesLabel = page.getByTestId(
      'application-details-pane-agreement-references-label'
    )
    this.applicationDetailsPaneLastMovementLabel = page.getByTestId(
      'application-details-pane-last-movement-label'
    )
    this.applicationDetailsPaneLastMovementDateTimeLabel = page.getByTestId(
      'application-details-pane-last-movement-date-time-label'
    )
    this.applicationDetailsPaneMovementHistoryPane = page.getByTestId(
      'application-details-pane-movement-history-pane'
    )
    this.movementHistoryTable = page.getByTestId('movement-history-table')
    this.searchTextBox = page.getByTestId('search-textbox')
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Applications')
  }

  async selectApplication(appId) {
    await expect(this.applicationsTable).toBeVisible()
    const tableRowsData = await this.applicationsTable.locator('tr')
    const targetRow = tableRowsData.filter({ hasText: appId })
    await targetRow.click()
  }

  async checkApplicationDetailsPaneExists() {
    await expect(this.applicationDetailsPane).toBeVisible()
  }

  async checkSearchBox() {
    await expect(this.searchTextBox).toBeVisible()
  }

  async checkApplicationDetailsPaneTitle(applicationName) {
    // Find the application name currently selected
    // If expected title is not specified, get application name from selected row
    if (applicationName === null) {
      const tableRow = await this.applicationsTable
        .locator('tr')
        .locator('.selected')
      applicationName = tableRow.nth(0)
    }

    // Check that the title is the same as the application name
    await expect(this.applicationDetailsPaneTitleLabel).toHaveText(
      applicationName
    )
  }

  async checkApplicationDetailsFields(expectedFields) {
    const expectedFieldsArray = expectedFields.split(',')
    await expectedFieldsArray.forEach((name) => {
      expect(this.page.getByTestId(name)).toBeVisible()
    })
  }

  async checkMovementHistorySectionExists() {
    await expect(this.applicationDetailsPaneMovementHistoryPane).toBeVisible()
  }

  async checkApplicationsData(expectedApplicationsDataList) {
    /*
      | Application ID   | 2203658, 2203641, 2200679                                       |
      | Year             | 2025,2024,2023                                                  |
      | Application Name | Domestic Capital Claim, Domestic Capital Claim, CO Rev Payments |
      | Status           | IN PROGRESS, IN PROGRESS, SUBMITTED                             |
    */
    for (const row of expectedApplicationsDataList.hashes()) {
      const expectedText = row.value.split(',')
      const tableData = await this.applicationsTable.locator('td')
      await tableData.forEach((text, index) => {
        expect(text).toEqual(expectedText[index])
      })
    }
  }

  async ApplicationDetailsPaneIsEmpty() {
    await expect(this.applicationDetailsPaneTitleLabel).not.toBeVisible()
  }

  async checkApplicationDetailsData(expectedApplicationData) {
    /*
          | Title                   | SOLITO ABSQUE DECET DEMONSTRO REPREHENDERIT VIA SOLLERS UBI |
          | Application ID          | 9098148058                                                  |
          | Scheme                  | BIS DERIPIO SUFFICIO SUPPELLEX VILICUS                      |
          | Year                    | 2022                                                        |
          | Status                  | DELETED                                                     |
          | Status (Portal)         | ...                                                         |
          | Submitted Date          | 31/12/2022 03:33:24                                         |
          | Agreement References    | 9190356161                                                  |
          | Last Movement           | CREATE DRAFT APPLICATION                                    |
          | Last Movement Date/Time | 31/12/2022 07:15:25                                         |
    */
    for (const row of expectedApplicationData.hashes()) {
      switch (row.label) {
        case 'Title':
          await expect(this.applicationDetailsPaneTitleLabel).toHaveText(
            row.value
          )
          break

        case 'Application ID':
          await expect(
            this.applicationDetailsPaneApplicationIdLabel
          ).toHaveText(row.value)
          break

        case 'Scheme':
          await expect(this.applicationDetailsPaneSchemeLabel).toHaveText(
            row.value
          )
          break

        case 'Year':
          await expect(this.applicationDetailsPaneYearLabel).toHaveText(
            row.value
          )
          break

        case 'Status':
          await expect(this.applicationDetailsPaneStatusLabel).toHaveText(
            row.value
          )
          break

        case 'Status (Portal)':
          await expect(this.applicationDetailsPaneStatusPortalLabel).toHaveText(
            row.value
          )
          break

        case 'Submitted Date':
          await expect(
            this.applicationDetailsPaneSubmittedDateLabel
          ).toHaveText(row.value)
          break

        case 'Agreement References':
          await expect(
            this.applicationDetailsPaneAgreementReferencesLabel
          ).toHaveText(row.value)
          break

        case 'Last Movement':
          await expect(this.applicationDetailsPaneLastMovementLabel).toHaveText(
            row.value
          )
          break

        case 'Last Movement Date/Time':
          await expect(
            this.applicationDetailsPaneLastMovementDateTimeLabel
          ).toHaveText(row.value)
          break

        default:
          throw new Error(
            'Check application detail data failed - field name not recognised'
          )
      }
    }
  }

  async checkMovementsHistoryData(expectedMovementsHistoryData, checkOrder) {
    /*
        | Date/Time | 31/12/2022 07:15:25, 31/12/2022 21:03:16, 31/12/2022 02:09:35 |
        | Movement  | CREATE DRAFT APPLICATION,DELETE, CREATION                     |
        | Check     | PASSED, PASSED, NOT PASSED                                    |
      */
    expectedMovementsHistoryData
      .hashes()
      .forEach((expectedRow, columnNumber) => {
        const expectedText = expectedRow.value.split(',')
        const actualRows = this.movementHistoryTable.locator('tr')
        actualRows.forEach((actualRow, rowNumber) => {
          expect(actualRow.locator('td').nth(columnNumber)).toEqual(
            expectedText[rowNumber]
          )
        })
      })

    if (checkOrder) {
      // check ordered by most recent year first - we know that actual=expected from above
      let lastDate = null
      expectedMovementsHistoryData
        .hashes()
        .forEach((expectedRow, columnNumber) => {
          if (expectedRow.label === 'Date/Time') {
            const expectedText = expectedRow.value.split(',')
            expectedText.forEach((text) => {
              if (lastDate !== null) {
                const textDate = new Date(text)
                expect(lastDate > textDate).toBeTruthy()
                lastDate = textDate
              } else {
                lastDate = new Date(text)
              }
            })
          }
        })
    }
  }
}
