import { test as base } from 'playwright-bdd'
import { ContactsLinkedBusinessesPage } from '../page-objects/contacts-linked-businesses-page.js'
import { ContactsAuthenticationPage } from '../page-objects/contacts-authentication-page.js'
import { BusinessMessagingPage } from '../page-objects/business-messaging-page.js'
import { BusinessLinkedContactsPage } from '../page-objects/business-linked-contacts-page.js'
import { BusinessLinkedContactsAuthenticationPage } from '../page-objects/business-linked-contacts-authentication-page.js'
import { BusinessLandDetailsPage } from '../page-objects/business-land-details-page.js'
import { BusinessCphDetailsPage } from '../page-objects/business-cph-details-page.js'
import { BusinessApplicationsPage } from '../page-objects/business-applications-page.js'
import { BusinessAgreementsPage } from '../page-objects/business-agreements-page.js'
import { BusinessAgreementDetailsPage } from '../page-objects/business-agreement-details-page.js'

export const test = base.extend({
  contactsLinkedBusinessesPage: async ({ page }, use) => {
    await use(new ContactsLinkedBusinessesPage(page))
  },
  contactsAuthenticationPage: async ({ page }, use) => {
    await use(new ContactsAuthenticationPage(page))
  },
  businessMessagingPage: async ({ page }, use) => {
    await use(new BusinessMessagingPage(page))
  },
  businessLinkedContactsPage: async ({ page }, use) => {
    await use(new BusinessLinkedContactsPage(page))
  },
  businessLinkedContactsAuthenticationPage: async ({ page }, use) => {
    await use(new BusinessLinkedContactsAuthenticationPage(page))
  },
  businessLandDetailsPage: async ({ page }, use) => {
    await use(new BusinessLandDetailsPage(page))
  },
  businessCphDetailsPage: async ({ page }, use) => {
    await use(new BusinessCphDetailsPage(page))
  },
  businessApplicationsPage: async ({ page }, use) => {
    await use(new BusinessApplicationsPage(page))
  },
  businessAgreementsPage: async ({ page }, use) => {
    await use(new BusinessAgreementsPage(page))
  },
  businessAgreementDetailsPage: async ({ page }, use) => {
    await use(new BusinessAgreementDetailsPage(page))
  }
})
