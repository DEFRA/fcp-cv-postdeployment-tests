import { expect } from '@playwright/test'

export default class BusinessAgreementsPage {
  constructor(page) {
    this.page = page
    this.agreementsTable = page.getByTestId('agreements-table')
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Agreements')
  }

  async checkViewRecordIsAvailable() {
    const rows = await this.agreementsTable.locator('tr')
    await rows.forEach(() => {
      const firstCell = this.permissionsDescriptionsTable.locator('td').first()
      expect(firstCell.getByRole('link')).toHaveCount(1)
    })
  }

  async clickViewRecordForAgreement(agreementReference) {
    await expect(this.agreementsTable).toBeVisible()
    const tableRowsData = await this.agreementsTable.locator('tr')

    let targetRow = null
    if (agreementReference === null) {
      targetRow = await tableRowsData.first()
    } else {
      targetRow = await tableRowsData.filter({
        hasText: agreementReference
      })
    }
    await targetRow.locator('td').first().click()
  }

  async checkAgreementsData(expectedAgreementsData, checkOrder) {
    /*
      | label          | value                                                                        |
      | Reference      | 8579482786, 8097698033, 2617418139                                           |
      | Year           | 2025, 2025, 2024                                                             |
      | Agreement Name | BPS AGREEMENT,ELS AGREEMENT,BPS AGREEMENT                                    |
      | Type           | Countryside Stewardship (MT), Basic Payment Scheme, Higher Level Stewardship |
      | Start Date     | 03/01/2023, 28/12/2024, 05/10/2022                                           |
      | End Date       | 03/04/2026, 22/08/2028, 14/09/2026                                           |
      | Status         | EXPIRED, WITHDRAWN, EXPIRED                                                  |
    */

    // TODO

    if (checkOrder) {
      // check ordered by most recent year first
    }
  }
}
