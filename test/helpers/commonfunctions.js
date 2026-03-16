import { expect } from '@playwright/test'

import ContactsLinkedBusinessesPage from '../page-objects/contacts-linked-businesses-page.js'
import ContactsAuthenticationPage from '../page-objects/contacts-authentication-page.js'
import BusinessMessagingPage from '../page-objects/business-messaging-page.js'
import BusinessLinkedContactsPage from '../page-objects/business-linked-contacts-page.js'
import BusinessLandDetailsPage from '../page-objects/business-land-details-page.js'
import BusinessCphDetailsPage from '../page-objects/business-cph-details-page.js'
import BusinessApplicationsPage from '../page-objects/business-applications-page.js'
import BusinessAgreementsPage from '../page-objects/business-agreements-page.js'

export async function navigate(page, pageName) {
  switch (pageName) {
    case 'Contacts Linked Businesses': {
      const contactsLinkedBusinessesPage = new ContactsLinkedBusinessesPage(
        page
      )
      await contactsLinkedBusinessesPage.gotoPage()
      break
    }

    case 'Contacts Authentication': {
      const contactsAuthenticationPage = new ContactsAuthenticationPage(page)
      await contactsAuthenticationPage.gotoPage()
      break
    }

    case 'Business Messages': {
      const businessMessagingPage = new BusinessMessagingPage(page)
      await businessMessagingPage.gotoPage()
      break
    }

    case 'Business Linked Contacts': {
      const businessLinkedContactsPage = new BusinessLinkedContactsPage(page)
      await businessLinkedContactsPage.gotoPage()
      break
    }

    case 'Land Details': {
      const businessLandDetailsPage = new BusinessLandDetailsPage(page)
      await businessLandDetailsPage.gotoPage()
      break
    }

    case 'CPH Details': {
      const businessCphDetailsPage = new BusinessCphDetailsPage(page)
      await businessCphDetailsPage.gotoPage()
      break
    }

    case 'Applications': {
      const businessApplicationsPage = new BusinessApplicationsPage(page)
      await businessApplicationsPage.gotoPage()
      break
    }

    case 'Agreements': {
      const businessAgreementsPage = new BusinessAgreementsPage(page)
      await businessAgreementsPage.gotoPage()
      break
    }

    default:
      // console.log('Navigation failed - page name not recognised')
      throw new Error('Navigation failed - page name not recognised')
  }
}

// The input table contains labels and values
// The method expects that 'label' is the label of the field and label+'-box' is the data field for that label
// The method expects that the value in the data field is 'value'
export async function checkFieldValues(expectedFieldTable) {
  /*
      EXAMPLE: table.hashes() returns:
      [
        { label: 'Full Name', value: 'Mr Merl Elody Kemmer' },
        { label: 'Role', value: 'Business Partner' }
        ...
      ]
    */

  for (const row of expectedFieldTable.hashes()) {
    await expect(this.page.getByLabel(row.label)).toBeVisible()
    await expect(this.page.getByLabel(row.label + '-box')).toHaveText(row.value)
  }
}

export async function checkFieldAndTableValues(
  expectedFieldAndTableTable,
  tableNames
) {
  /*
      EXAMPLE: table.hashes() returns:
      [
        { label: 'CRN', value: '1103020285' },
        { label: 'Role', value: 'Business Partner' }
        { label: 'MyTable', value: '1,2,3,4' }
        ...
      ]
    */

  for (const row of expectedFieldAndTableTable.hashes()) {
    if (tableNames.includes(row.label)) {
      // If the row is referring to a table, we need to go through each of the data items
      const expectedText = row.value.split(',')
      const myTable = await this.page.getByTestId(row.label + '-table')
      const tableData = await myTable.locator('td')
      await tableData.forEach((text, index) => {
        expect(text).toEqual(expectedText[index])
      })
    } else {
      // If the row IS NOT a table, we do a simple comparison
      await expect(this.page.getByLabel(row.label)).toBeVisible()
      await expect(this.page.getByLabel(row.label + '-box')).toHaveText(
        row.value
      )
    }
  }
}

export function updateURLParameter(url, param, paramVal) {
  let newAdditionalURL = ''
  let tempArray = url.split('?')
  const baseURL = tempArray[0]
  const additionalURL = tempArray[1]
  let temp = ''
  if (additionalURL) {
    tempArray = additionalURL.split('&')
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split('=')[0] !== param) {
        newAdditionalURL += temp + tempArray[i]
        temp = '&'
      }
    }
  }

  const newParm = temp + '' + param + '=' + paramVal
  return baseURL + '?' + newAdditionalURL + newParm
}

export async function checkTabCount(context, expectedTabCount) {
  const totPages = context.pages().length
  await expect(totPages).toEqual(expectedTabCount)
}
