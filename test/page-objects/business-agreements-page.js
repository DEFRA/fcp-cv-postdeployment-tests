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
}
