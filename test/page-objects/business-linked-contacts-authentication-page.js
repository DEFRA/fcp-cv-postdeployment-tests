import { expect } from '@playwright/test'

export default class BusinessLinkedContactsAuthenticationPage {
  constructor(page) {
    this.page = page
    this.baseUrl =
      'https://fcp-cv-frontend.' +
      process.env.ENVIRONMENT +
      '.cdp-int.defra.cloud/' +
      'businessLinkedContacts-Authentication'
    this.titleLabel = page.getByTestId('title-label')
    this.crnLabel = page.getByTestId('crn-label')
    this.fullNameLabel = page.getByTestId('fullname-label')
    this.roleLabel = page.getByTestId('role-label')
    this.dobLabel = page.getByTestId('dob-label')
    this.title = page.getByTestId('title')
    this.authenticationTable = page.getByTestId('authentication-table')
  }

  async gotoPage() {
    await this.page.goto(this.baseUrl)
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle(
      'Business Linked Contacts Authentication'
    )
  }

  async contactsAuthenticationSubScreenTitleIsVisible() {
    expect(this.titleLabel).toBeVisible()
  }

  async contactsAuthenticationSubScreenCrnIsVisible() {
    expect(this.crnLabel).toBeVisible()
  }

  async contactsAuthenticationSubScreenFullNameIsVisible() {
    expect(this.fullNameLabel).toBeVisible()
  }

  async contactsAuthenticationSubScreenRoleIsVisible() {
    expect(this.roleLabel).toBeVisible()
  }

  async contactsAuthenticationSubScreenDobIsVisible() {
    expect(this.dobLabel).toBeVisible()
  }

  async checkContactsAuthenticationSubScreen(expectedTableData) {
    for (const row of expectedTableData.hashes()) {
      // For any values that are embedded in the authentication table, work out the column position
      let columnPosition = null
      if (row.label === 'Memorable Date') columnPosition = 0
      else if (row.label === 'Memorable Event') columnPosition = 1
      else if (row.label === 'Memorable Place') columnPosition = 2
      else if (row.label === 'Updated Date') columnPosition = 3

      if (
        row.label === 'Memorable Date' ||
        row.label === 'Memorable Event' ||
        row.label === 'Memorable Place' ||
        row.label === 'Updated Date'
      ) {
        const tableData = await this.authenticationTable
          .locator('tr > td')
          .nth(columnPosition)
        expect(tableData).toHaveText(row.value)
      } else {
        await expect(this.page.getByLabel(row.label)).toBeVisible()
        await expect(this.page.getByLabel(row.label + '-box')).toHaveText(
          row.value
        )
      }
    }
  }
}
