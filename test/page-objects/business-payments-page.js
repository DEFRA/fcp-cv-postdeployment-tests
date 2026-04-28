import { expect } from '@playwright/test'

export default class BusinessPaymentsPage {
  constructor(page) {
    this.page = page
    this.searchBox = page.getByLabel('Search')
    this.baseUrl =
      'https://fcp-cv-frontend.' +
      process.env.ENVIRONMENT +
      '.cdp-int.defra.cloud/' +
      'payments'
  }

  async gotoPage() {
    await this.page.goto(this.baseUrl)
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Payments')
  }

  async enterTextIntoSearchBox(searchText) {
    await this.searchBox.fill(searchText)
  }

  async checkMessageIsDisplayed(expectedText) {
    await expect(this.page.getByText(expectedText)).toBeVisible()
  }
}
