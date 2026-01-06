import { expect } from '@playwright/test'

export default class BusinessLinkedContactsPage {
  constructor(page) {
    this.page = page
    this.baseUrl =
      'https://fcp-cv-frontend.' +
      process.env.ENVIRONMENT +
      '.cdp-int.defra.cloud/' +
      'businessLinkedContacts'
    this.viewCustomerButton = page.getByTestId('view-customer-button')
  }

  async gotoPage() {
    await this.page.goto(this.baseUrl)
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Linked Contacts')
  }

  async clickViewCustomerButton() {
    await this.viewCustomerButton.click()
  }
}
