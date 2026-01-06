import { expect } from '@playwright/test'

export default class BusinessCphDetailsPage {
  constructor(page) {
    this.page = page
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business CPH Details')
  }
}
