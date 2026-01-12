import { ContactsLinkedBusinessesPage } from '../page-objects/contacts-linked-businesses-page.js'
import { ContactsAuthenticationPage } from '../page-objects/contacts-authentication-page.js'
import { BusinessMessagingPage } from '../page-objects/business-messaging-page.js'
import { BusinessLinkedContactsPage } from '../page-objects/business-linked-contacts-page.js'
import { BusinessLandDetailsPage } from '../page-objects/business-land-details-page.js'
import { BusinessCphDetailsPage } from '../page-objects/business-cph-details-page.js'
import { BusinessApplicationsPage } from '../page-objects/business-applications-page.js'
import { BusinessAgreementsPage } from '../page-objects/business-agreements-page.js'

export async function navigate(pageName) {
  switch (pageName) {
    case 'Contacts Linked Businesses':
      await ContactsLinkedBusinessesPage.gotoPage()
      break

    case 'Contacts Authentication':
      await ContactsAuthenticationPage.gotoPage()
      break

    case 'Business Messages':
      await BusinessMessagingPage.gotoPage()
      break

    case 'Business Linked Contacts':
      await BusinessLinkedContactsPage.gotoPage()
      break

    case 'Land Details':
      await BusinessLandDetailsPage.gotoPage()
      break

    case 'CPH Details':
      await BusinessCphDetailsPage.gotoPage()
      break

    case 'Applications':
      await BusinessApplicationsPage.gotoPage()
      break

    case 'Agreements':
      await BusinessAgreementsPage.gotoPage()
      break

    default:
      // console.log('Navigation failed - page name not recognised')
      throw new Error('Navigation failed - page name not recognised')
  }
}
