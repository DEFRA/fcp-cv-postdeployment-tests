import { expect } from '@playwright/test'

export default class BusinessAgreementDetailsPage {
  constructor(page) {
    this.page = page
    this.headerLabel = page.getByTestId('header-label')
    this.backButton = page.getByTestId('back-button')
  }

  async checkHeader(expectedHeaderText) {
    await expect(this.headerLabel).toHaveText(expectedHeaderText)
  }

  async checkFields(expectedLabelTextList) {
    const expectedLabelTextArray = expectedLabelTextList.split(',')
    await expectedLabelTextArray.forEach((text) => {
      expect(this.page.getByText(text)).toBeVisible()
    })
  }

  async checkBackButtonExists() {
    await expect(this.backButton).toBeVisible()
  }

  async clickBackButton() {
    await this.backButton.click()
  }
}
