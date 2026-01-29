import { expect } from '@playwright/test'

export default class BusinessAgreementDetailsPage {
  constructor(page) {
    this.page = page
    this.headerLabel = page.getByTestId('header-label')
    this.backButton = page.getByTestId('back-button')
    this.agreementDetailsTable = page.getByTestId('agreement-details-table')
  }

  async checkHeader(expectedHeaderText) {
    await expect(this.headerLabel).toHaveText(expectedHeaderText)
  }

  async checkFields(expectedLabelTextList) {
    const expectedLabelTextArray = expectedLabelTextList.split(',')
    await expectedLabelTextArray.forEach((text) => {
      expect(this.page.getByText(text)).toBeVisible()
    })
  }

  async checkBackButtonExists() {
    await expect(this.backButton).toBeVisible()
  }

  async clickBackButton() {
    await this.backButton.click()
  }

  async checkAgreementDetailsColumnOrdering(expectedAgreementDetailsList) {
    /*
          | label             | value                                                                                                                                                           |
          | Sheet             | HFUTNN, KQYCHH, SNXADR                                                                                                                                          |
          | Parcel            | 4704, 2883, 4847                                                                                                                                                |
          | Description       | Tondeo auctus adopto quas vociferor conicio solium. , Aduro attonbitus trans taceo asperiores vereor tempora. , Aveho desipio comis cubitum cui apostolus summa.|
          | Action Area (ha)  | 0.982, 1.2899, 2.1875                                                                                                                                           |
          | Action Length (m) | 43, null, null                                                                                                                                                  |
          | Action Units      | 7, 79, null                                                                                                                                                     |
          | Parcel Area (ha)  | 1.6975, 2.3073, 2.01                                                                                                                                            |
          | Payment Schedule  | 29/11/2023-21/09/2026, 18/07/2020-16/09/2026, 24/05/2021-07/08/2025                                                                                             |
          | Commitment Term   | 20/07/2019-25/01/2025, 11/08/2017-30/09/2028, 04/01/2022-17/05/2025
    */
    // Check the table contents
    for (const row of expectedAgreementDetailsList.hashes()) {
      const expectedText = row.value.split(',')
      const tableData = await this.agreementDetailsTable.locator('td')
      await tableData.forEach((text, index) => {
        expect(text).toEqual(expectedText[index])
      })
    }

    // Check that the table is ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending
    // TODO
  }

  async checkActionAreaHaValues() {
    // Make an API call to the mock to get the agreement's ActionAreaHa values
    // TODO
    // For each row, check that the ActionAreaHa value shown is the API/JSON value divided by 10,000 (as it is provided in m2 but displayed in ha)
    // TODO
  }

  async checkParcelAreaHaValues() {
    // Make an API call to the mock to get the agreement's ParcelAreaHa values
    // TODO
    // For each row, check that the ParcelAreaHa value shown is the API/JSON value divided by 10,000 (as it is provided in m2 but displayed in ha)
    // TODO
  }
}
