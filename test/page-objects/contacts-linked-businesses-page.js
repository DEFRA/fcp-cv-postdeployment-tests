import { expect } from '@playwright/test'

export default class ContactsLinkedBusinessesPage {
  constructor(page) {
    this.page = page
    this.businessNameLabel = page.getByTestId('business-name-label')
    this.viewBusinessButton = page.getByTestId('view-business-button')
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Contacts Linked Businesses')
  }

  async checkBusinessNameTitle() {
    await expect(this.businessNameLabel).toBeVisible()
    await expect(this.businessNameLabel).toHaveCSS('.font-bold')
  }

  async checkAllFields(expectedFields) {
    const expectedFieldNames = expectedFields.split(',')
    await expectedFieldNames.forEach((text) => {
      expect(this.page.getByTestId(text + '-label')).toBeVisible()
      expect(this.page.getByTestId(text + '-data')).toBeVisible()
    })
  }

  async checkViewBusinessButton() {
    await expect(this.viewBusinessButton).toBeVisible()
  }
}
