import { expect } from '@playwright/test'

export default class BusinessMessagingPage {
  constructor(page) {
    this.page = page
    this.contactsListLabel = page.getByTestId('contacts-list-label')
    this.contactsListDropDown = page.getByTestId('contacts-list-dropdown')
    this.messagesTable = page.getByTestId('messages-table')
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Messaging')
  }

  async selectContact(contactName) {
    if (contactName === null) {
      await this.contactsListDropDown.selectOption({ index: 0 })
    } else {
      await this.contactsListDropDown.selectOption({ label: contactName })
    }
  }

  async selectMessage(subject) {
    await expect(this.messagesTable).toBeVisible()
    const tableRowsData = await this.messagesTable.locator('tr')

    if (subject === null) {
      const targetRow = await tableRowsData.first()
      await targetRow.click()
    } else {
      const targetRow = await tableRowsData.filter({ hasText: subject })
      await targetRow.click()
    }
  }
}
