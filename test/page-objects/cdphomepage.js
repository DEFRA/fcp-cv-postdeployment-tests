import { expect } from '@playwright/test'

export default class HomePage {
  constructor(page) {
    this.page = page
    this.documentationTab = page.getByTestId('nav-documentation')
    // Unused example of adjusting the url by environment
    this.baseUrl =
      'https://fcp-dal-api.' +
      process.env.ENVIRONMENT +
      '.cdp-int.defra.cloud/graphql'
  }

  async gotoHomePage() {
    await this.page.goto('https://portal.cdp-int.defra.cloud/')
    await expect(this.page).toHaveTitle(
      /Home | Core Delivery Platform - Portal/
    )
  }

  async clickDocumentationTab() {
    await this.documentationTab.click()
  }
}
