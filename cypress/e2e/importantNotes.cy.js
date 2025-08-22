installing cypress
npm init -y // create package.json in folder
npm install cypress // install cypress
npx cypress open // open cypress

describe('Describe of whole suit', () => {
    it('Describe of individual test', () => {
      cy.visit('https://something.com/')

    })
  })

// LOCATORS TYPES

// 1. Class Selector
cy.get('.panel-title')
cy.get('[class="loginButton"]')

// 2. ID Selector
cy.get('#username')

// 3. Atribute value Selector
cy.get('[name="username"]')

// 4. Combination Selector
cy.get('input[name="username"]')
