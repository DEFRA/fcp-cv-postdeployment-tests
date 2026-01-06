import { expect } from '@playwright/test'

export default class ContactsLinkedBusinessesPage {
  constructor(page) {
    this.page = page
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Contacts Linked Businesses')
  }
}
