import { expect } from '@playwright/test'

export default class ContactsLinkedBusinessesPage {
  constructor(page) {
    this.page = page
    this.businessNameLabel = page.getByTestId('business-name-label')
    this.viewBusinessButton = page.getByTestId('view-business-button')
    this.businessesTable = page.getByTestId('businesses-table')
    this.permissionsTable = page.getByTestId('permissions-table')
    this.permissionsTable = page.getByTestId('permissions-levels-table')
    this.permissionsDescriptionsTable = page.getByTestId(
      'permissions-descriptions-table'
    )
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

  async selectBusiness(businessName) {
    await expect(this.businessesTable).toBeVisible()
    const tableRowsData = await this.businessesTable.locator('tr')
    const targetRow = tableRowsData.filter({ hasText: businessName })
    await targetRow.click()
  }

  async selectPermission(permissionName) {
    await expect(this.permissionsTable).toBeVisible()
    const tableRowsData = await this.permissionsTable.locator('tr')
    const targetRow = tableRowsData.filter({ hasText: permissionName })
    await targetRow.click()
  }

  async checkBusinessList(expectedBusinessListDetails) {
    /*
        EXAMPLE: table.hashes() returns:
        [
          { label: 'SBI', value: '121428499, 106238988, 106284736, 107591843' },
          { label: 'Name', value: '"Bailey, Dickens and Mraz", "Gleichner,Okuneva and Murazik", "Goldner, Schmeler and Kutch", "Homenick, McDermott and Luettgen"' }
        ]
      */

    for (const row of expectedBusinessListDetails.hashes()) {
      const expectedText = row.value.split(',')
      const tableData = await this.businessesTable.locator('td')
      await tableData.forEach((text, index) => {
        expect(text).toEqual(expectedText[index])
      })
    }
  }

  async checkBusinessData(expectedBusinessDetails) {
    /*
      | Title                   | Bailey, Dickens and Mraz                                                                                                                                                                                                                     |
      | SBI                     | 1103020285                                                                                                                                                                                                                                   |
      | Role                    | Business Partner                                                                                                                                                                                                                             |
      | Permissions             | BASIC_PAYMENT_SCHEME, BUSINESS_DETAILS, COUNTRYSIDE_STEWARDSHIP_AGREEMENTS, COUNTRYSIDE_STEWARDSHIP_APPLICATIONS, ENTITLEMENTS, ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS, LAND_DETAILS                                                     |
      | Permissions Levels      | SUBMIT, FULL_PERMISSION, SUBMIT, SUBMIT, AMEND, SUBMIT, AMEND                                                                                                                                                                                |
      | Permission Descriptions | View business summary, View claims, "View land, features and covers", Create and edit a claim, Amend a previously submitted claim, "Amend land, features and covers", Submit a claim, Withdraw a claim, "Receive warnings and notifications" |
      */

    for (const row of expectedBusinessDetails.hashes()) {
      if (
        row.label === 'Permissions' ||
        row.label === 'Permissions Levels' ||
        row.label === 'Permission Descriptions'
      ) {
        const expectedText = row.value.split(',')
        const myTable = await this.page.getByTestId(row.label + '-table')
        const tableData = await myTable.locator('td')
        await tableData.forEach((text, index) => {
          expect(text).toEqual(expectedText[index])
        })
      } else {
        await expect(this.page.getByLabel(row.label)).toBeVisible()
        await expect(this.page.getByLabel(row.label + '-box')).toHaveText(
          row.value
        )
      }
    }
  }

  async checkPermissionDescriptionTable(expectedDescriptions) {
    const expectedText = expectedDescriptions.split(',')
    const tableData = await this.permissionsDescriptionsTable.locator('td')
    await tableData.forEach((text, index) => {
      expect(text).toEqual(expectedText[index])
    })
  }

  async clickViewBusinessButton() {
    await this.viewBusinessButton.click()
  }
}
