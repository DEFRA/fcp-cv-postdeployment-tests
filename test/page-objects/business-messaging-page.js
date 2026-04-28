import { expect } from '@playwright/test'

export default class BusinessMessagingPage {
  constructor(page) {
    this.page = page
    this.validDateRangeOptions = [
      'Last 12 months',
      'Last 24 months',
      'Last 36 months',
      'All'
    ]
    this.validReadUnreadOptions = ['All', 'Read', 'Unread']
    this.contactsListLabel = page.getByText('Contact')
    this.contactsListDropDown = page.getByLabel('Contact')
    this.messagesTable = page.getByRole('table')
    this.dateRangeLabel = page.getByText('Date Range')
    this.dateRangeDropDown = page.getByLabel('Date Range')
    this.readUnreadMessageLabel = page.getByTestId(
      'read-unread-message-list-label'
    )
    this.readUnreadMessageDropDown = page.getByTestId(
      'read-unread-message-list-dropdown'
    )
    this.contactTitleLabel = page.getByRole('heading').nth(3)
    this.messageDateLabel = page.getByRole('term').filter({ hasText: 'Date' })
    this.messageDateTextBox = page.getByRole('definition').nth(0)
    this.messageReadLabel = page.getByRole('term').filter({ hasText: 'Read' })
    this.messageReadTextBox = page.getByRole('definition').nth(1)
    this.messageDeletedLabel = page.getByText('Deleted', { exact: 'true' })
    this.messageDeletedTextBox = page.getByRole('definition').nth(2)
    this.messageTextBox = page.getByRole('paragraph').nth(1)
    this.baseUrl =
      'https://fcp-cv-frontend.' +
      process.env.ENVIRONMENT +
      '.cdp-int.defra.cloud/' +
      'business-messages'
  }

  async gotoPage() {
    await this.page.goto(this.baseUrl)
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Messaging')
  }

  async selectContact(contactName) {
    if (!contactName) {
      await this.contactsListDropDown.click()
      await this.contactsListDropDown.selectOption({ index: 1 })
    } else {
      await this.contactsListDropDown.selectOption({ label: contactName })
    }
  }

  async selectMessage(subject) {
    await expect(this.messagesTable).toBeVisible()
    await this.page.waitForLoadState('networkidle')
    const tableRowsData = await this.messagesTable.locator('tr')

    let targetRow = null
    if (!subject) {
      targetRow = await tableRowsData.nth(1) // Get first data row, ignoring header row
    } else {
      targetRow = await tableRowsData.filter({ hasText: subject })
    }
    await targetRow.click()
  }

  async selectDateRange(rangeString) {
    await expect(this.validDateRangeOptions).toContain(rangeString)
    await this.dateRangeDropDown.selectOption({ label: rangeString })
  }

  async selectReadUnread(optionString) {
    await expect(this.validReadUnreadOptions).toContain(optionString)
    await this.readUnreadMessageDropDown.selectOption({ label: optionString })
  }

  async checkContactsDropDown() {
    await this.contactsListDropDown.isVisible()
  }

  async checkDateRangeDropDownDisabled() {
    await this.dateRangeDropDown.not.toBeEnabled()
  }

  async checkReadUnreadMessageDropDownDisabled() {
    await this.readUnreadMessageDropDown.not.toBeEnabled()
  }

  async checkDeletedField(stringValue) {
    await expect(this.deletedFieldTextBox).toContainText(stringValue)
  }

  async checkDateRangeDropDown(expectedDateRangeOptions) {
    const expectedDateRangeOptionsList = expectedDateRangeOptions.split(',')
    await expect(this.dateRangeDropDown).toHaveText(
      expectedDateRangeOptionsList
    )
  }

  async checkReadUnreadMessageDropDown(expectedReadUnreadOptions) {
    const expectedReadUnreadOptionsList = expectedReadUnreadOptions.split(',')
    await expect(this.readUnreadMessageDropDown).toHaveText(
      expectedReadUnreadOptionsList
    )
  }

  async checkContactsDropDownIsEmpty() {
    const options = await this.contactsListDropDown.locator('option')
    await expect(options).toHaveCount(0)
  }

  async checkContactsList(expectedContactsListText) {
    const expectedContactsList = expectedContactsListText.split(',')
    await expect(this.contactsListDropDown).toHaveText(expectedContactsList)
  }

  async checkMessagesList(expectedMessageTableValues) {
    /*
      | Status  | Unread, Unread, Read, Unread                                                                                           |
      | Date    | 1723577035401, 1717810388400, 1700229203688, 1726822799905                                                             |
      | Subject | "Agnosco cohaero ancilla.", "Vivo quae ultra caste.", "Triumphus facilis aiunt.", "Facilis beatae vesper copia velit." |
    */

    for (const row of expectedMessageTableValues.hashes()) {
      const expectedText = row.value.split(',')
      const tableData = await this.businessesTable.locator('td')
      await tableData.forEach((text, index) => {
        expect(text).toEqual(expectedText[index])
      })
    }
  }

  async checkLabelWithTextExists(labelText) {
    await expect(this.page.getByText(labelText)).toBeVisible()
  }

  async validateRightPaneStructure() {
    await expect(this.contactTitleLabel).toBeVisible()
    await expect(this.contactTitleLabel).toHaveClass(/font-bold/)
    await expect(this.messageDateLabel).toBeVisible()
    await expect(this.messageDateTextBox).toBeVisible()
    await expect(this.messageReadLabel).toBeVisible()
    await expect(this.messageReadTextBox).toBeVisible()
    await expect(this.messageDeletedLabel).toBeVisible()
    await expect(this.messageDeletedTextBox).toBeVisible()
    await expect(this.messageTextBox).toBeVisible()
  }

  async checkMessageDetails(expectedData) {
    /*
         | Title    | Agnosco cohaero ancilla.                                        |
         | Date     | 1723577035401                                                   |
         | Read?    | No                                                              |
         | Deleted? | No                                                              |
         | Message  | <p>Talis cubicularis thesis cohors venia deleo tam claudeo.</p> |
    */

    for (const row of expectedData.hashes()) {
      switch (row.label) {
        case 'Title':
          await expect(this.contactTitleLabel).toHaveText(row.value)
          break

        case 'Date':
          await expect(this.messageDateTextBox).toHaveText(row.value)
          break

        case 'Read?':
          await expect(this.messageReadTextBox).toHaveText(row.value)
          break

        case 'Deleted?':
          await expect(this.messageDeletedTextBox).toHaveText(row.value)
          break

        case 'Message':
          await expect(this.messageTextBox).toHaveText(row.value)
          break

        default:
          throw new Error('Navigation failed - page name not recognised')
      }
    }
  }
}
