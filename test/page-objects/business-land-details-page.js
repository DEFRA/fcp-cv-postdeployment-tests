import { expect } from '@playwright/test'

export default class BusinessLandDetailsPage {
  constructor(page) {
    this.page = page
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Land Details')
  }
}
