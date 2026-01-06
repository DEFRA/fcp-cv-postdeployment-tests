import { expect } from '@playwright/test'

export default class ContactsAuthenticationPage {
  constructor(page) {
    this.page = page
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Contacts Authentication')
  }
}
