import { test as base } from 'playwright-bdd'
import HomePage from '../../page-objects/cdphomepage.js'
import DocumentationPage from '../../page-objects/cdpdocumentationpage.js'

export const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  documentationPage: async ({ page }, use) => {
    await use(new DocumentationPage(page))
  }
})
