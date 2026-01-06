import { expect } from '@playwright/test'

export default class BusinessMessagingPage {
  constructor(page) {
    this.page = page
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Messaging')
  }
}
