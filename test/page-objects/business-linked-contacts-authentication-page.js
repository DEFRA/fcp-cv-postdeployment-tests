import { expect } from '@playwright/test'

export default class BusinessLinkedContactsAuthenticationPage {
  constructor(page) {
    this.page = page
    this.baseUrl =
      'https://fcp-cv-frontend.' +
      process.env.ENVIRONMENT +
      '.cdp-int.defra.cloud/' +
      'businessLinkedContacts-Authentication'
    this.titleLabel = page.getByTestId('title-label')
    this.crnLabel = page.getByTestId('crn-label')
    this.fullNameLabel = page.getByTestId('fullname-label')
    this.roleLabel = page.getByTestId('role-label')
    this.dobLabel = page.getByTestId('dob-label')
    this.title = page.getByTestId('title')
  }

  async gotoPage() {
    await this.page.goto(this.baseUrl)
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle(
      'Business Linked Contacts Authentication'
    )
  }

  async contactsAuthenticationSubScreenTitleIsVisible() {
    expect(this.titleLabel).toBeVisible()
  }

  async contactsAuthenticationSubScreenCrnIsVisible() {
    expect(this.crnLabel).toBeVisible()
  }

  async contactsAuthenticationSubScreenFullNameIsVisible() {
    expect(this.fullNameLabel).toBeVisible()
  }

  async contactsAuthenticationSubScreenRoleIsVisible() {
    expect(this.roleLabel).toBeVisible()
  }

  async contactsAuthenticationSubScreenDobIsVisible() {
    expect(this.dobLabel).toBeVisible()
  }

  async checkContactsAuthenticationSubScreen() {
    // TODO
  }
}
