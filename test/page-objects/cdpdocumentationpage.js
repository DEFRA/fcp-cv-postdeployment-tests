import { expect } from '@playwright/test'

export default class DocumentationPage {
  constructor(page) {
    this.page = page
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle(
      /Documentation - Home | Core Delivery Platform - Portal/
    )
  }
}
