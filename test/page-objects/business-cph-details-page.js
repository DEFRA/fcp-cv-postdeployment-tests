import { expect } from '@playwright/test'

export default class BusinessCphDetailsPage {
  constructor(page) {
    this.page = page
    this.cphTable = page.getByTestId('cph-table')
    this.cphDetailsPaneTitleLabel = page.getByTestId(
      'cph-details-pane-title-label'
    )
    this.cphDetailsPaneParishDataLabel = page.getByTestId(
      'cph-details-pane-parish-data-label'
    )
    this.cphDetailsPaneStartDateDataLabel = page.getByTestId(
      'cph-details-pane-start-date-data-label'
    )
    this.cphDetailsPaneEndDateDataLabel = page.getByTestId(
      'cph-details-pane-end-date-data-label'
    )
    this.cphDetailsPaneCoordinatesDataLabel = page.getByTestId(
      'cph-details-pane-coordinates-data-label'
    )
    this.cphDetailsPaneSpeciesDataLabel = page.getByTestId(
      'cph-details-pane-species-data-label'
    )
    this.cphDetailsPaneAddressDataLabel = page.getByTestId(
      'cph-details-pane-address-data-label'
    )
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business CPH Details')
  }

  async checkDetailsPaneTitle(expectedTitlePrefix) {
    const tableRow = await this.cphTable.locator('tr').locator('.selected')
    const cphNumber = tableRow.nth(0)
    await expect(this.cphDetailsPaneTitleLabel).toHaveText(
      expectedTitlePrefix + ' ' + cphNumber
    )
  }

  async checkDetailsPaneFields(expectedFields) {
    const expectedFieldNames = expectedFields.split(',')
    await expectedFieldNames.forEach((text) => {
      expect(this.page.getByTestId(text + '-label')).toBeVisible()
      expect(this.page.getByTestId(text + '-data')).toBeVisible()
    })
  }

  async checkDetailsPaneFieldsArePopulated() {
    await expect(this.cphDetailsPaneTitleLabel).not.toBeEmpty()
    await expect(this.cphDetailsPaneParishDataLabel).not.toBeEmpty()
    await expect(this.cphDetailsPaneStartDateDataLabel).not.toBeEmpty()
    await expect(this.cphDetailsPaneEndDateDataLabel).not.toBeEmpty()
    await expect(this.cphDetailsPaneCoordinatesDataLabel).not.toBeEmpty()
    await expect(this.cphDetailsPaneSpeciesDataLabel).not.toBeEmpty()
    await expect(this.cphDetailsPaneAddressDataLabel).not.toBeEmpty()
  }

  async checkCphListData(expectedCphData, checkOrder) {
    /*
      | CPH number | 04/691/1023, 14/434/2708, 20/213/7336, 23/552/0908, 48/541/7225, 55/721/0654, 57/309/1950, 80/531/7737                                |
      | Parish     | Pettistree, Charlton, Upton-upon-Severn, Duntisbourne Abbots, Ascott-under-Wychwood,East Chiltington, Heaton-with-Oxcliffe, Riseholme |
      | Start Date | 05/10/2024, 09/02/2024, 14/08/2022, 19/04/2022, 19/04/2020, 10/02/2020, 06/11/2022, 07/07/2022, 23/02/2023                            |
      | End Date   | 25/05/2027, 31/12/9999, 23/12/2025, 31/12/9999, 31/12/9999, 22/09/2024, 31/12/9999, 03/06/2023
    */
    expectedCphData.hashes().forEach((expectedRow, columnNumber) => {
      const expectedText = expectedRow.value.split(',')
      const actualRows = this.cphTable.locator('tr')
      actualRows.forEach((actualRow, rowNumber) => {
        expect(actualRow.locator('td').nth(columnNumber)).toEqual(
          expectedText[rowNumber]
        )
      })
    })

    // This code checks table order by CPH number
    // TODO - this needs to check by CPH number primarily, then start date
    if (checkOrder) {
      // check ordered by CPH number first - we know that actual=expected from above
      let lastDate = null
      expectedCphData.hashes().forEach((expectedRow, columnNumber) => {
        if (expectedRow.label === 'CPH number') {
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

  async selectCph(cphNumber) {
    await expect(this.cphTable).toBeVisible()
    const tableRowsData = await this.cphTable.locator('tr')

    let targetRow = null
    if (cphNumber === null) {
      targetRow = await tableRowsData.first()
    } else {
      targetRow = await tableRowsData.filter({ hasText: cphNumber })
    }
    await targetRow.click()
  }

  async checkDetailsPaneIsEmpty() {
    await expect(this.cphDetailsPaneTitleLabel).not.ToBeVisible()
  }

  async checkCphFieldData(expectedCphDetails) {
    /*
      | Title              | CPH Number: 20/213/7336                                               |
      | Parish             | Upton-upon-Severn                                                     |
      | Start Date         | 14/08/2022                                                            |
      | End Date           | 23/12/2025                                                            |
      | Coordinates (x, y) | "176949, 434894"                                                      |
      | Species            | PIG(S),CAMELIDS,POULTRY,OTHER,PIGEONS,CATTLE,GOAT(S),SHEEP            |
      | Address            | "TANTILLUS CATTUS CONDICO FARM, HERZOG WYND, UPPER SCHILLER, KF0 5GZ" |
    */
    for (const row of expectedCphDetails.hashes()) {
      switch (row.label) {
        case 'Title':
          await expect(this.cphDetailsPaneTitleLabel).toHaveText(row.value)
          break

        case 'Parish':
          await expect(this.cphDetailsPaneParishDataLabel).toHaveText(row.value)
          break

        case 'Start Date':
          await expect(this.cphDetailsPaneStartDateDataLabel).toHaveText(
            row.value
          )
          break

        case 'End Date':
          await expect(this.cphDetailsPaneEndDateDataLabel).toHaveText(
            row.value
          )
          break

        case 'Coordinates (x, y)':
          await expect(this.cphDetailsPaneCoordinatesDataLabel).toHaveText(
            row.value
          )
          break

        case 'Species':
          await expect(this.cphDetailsPaneSpeciesDataLabel).toHaveText(
            row.value
          )
          break

        case 'Address':
          await expect(this.cphDetailsPaneAddressDataLabel).toHaveText(
            row.value
          )
          break

        default:
          throw new Error(
            'Check CPH detail data failed - field name not recognised'
          )
      }
    }
  }

  async checkCphFieldsExist(expectedFields) {
    const expectedFieldsArray = expectedFields.split(',')
    await expectedFieldsArray.forEach((name) => {
      expect(this.page.getByTestId(name)).toBeVisible()
    })
  }
}
