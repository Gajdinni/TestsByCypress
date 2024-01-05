import 'cypress-axe';


// beforeEach test the page will return to ('/')

describe('The Home Page', () => {
  it('Successfully loads', () => {
   cy.visit('/articles/3') // first subpage
   .visit('/') // back to home
   .visit('/articles/4') // second subpage
   .visit('/') // back to home
   .visit('/login') // login subpage
  })
})


describe('Basic Authentication', () => {
   it('Authentication', () => {
    cy.visit('/login', {
      auth: {
        username: 'tomo',
        password: 'tomo',
      }
    })
   })
})


describe('LoadTimeout', () => {
  it('Correct', () => {
    // Wait 30 seconds for page 'load' event
   cy.visit('/login', { timeout: 30000 })
  })
})


describe('CallBack', () => {
  it('Correct', () => {
    cy.visit('/#dashboard', {
      onBeforeLoad: (contentWindow) => {
      // contentWindow is the remote page's window object
  },
})
  })
})


describe('Login and Password', () => {
  it('Correct Login and Password', () => {
    cy.fixture('example.json').then((example) => {
      const {username, password } = example.exampleCredentials;
    cy.visit('/login')
      .get('input[name="username"]').type(username)
      .get('input[name="password"]').type(password)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    /// example, incorrect login and password

    cy.fixture('example.json').then((example1) => {
      const { username1, password1 } = example1.
    example1;
    cy.visit('/login')
      .get('input[name="username"]').type(username1)
      .get('input[name="password"]').type(password1)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    /// example, incorrect login and password

    cy.fixture('example.json').then((example2) => {
      const { username2, password2 } = example2.example2;
    cy.visit('/login')
      .get('input[name="username"]').type(username2)
      .get('input[name="password"]').type(password2)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    /// example, incorrect login and password

    cy.fixture('example.json').then((exampleC) => {
      const { username3, password3 } = exampleC.
    exampleCorrect;
    cy.visit('/login')
      .get('input[name="username"]').type(username3)
      .get('input[name="password"]').type(password3)
      .get('button[type="submit"]').click()
    })
    /// correct login and password
  })
})


describe('Cache Tests', () => {
  it('Check resource caching', () => {
    cy.reload(true); // Force page reload with cache clearing
    // Test if resources are correctly cached
  })
})


describe('Performance Tests', () => {
  it('Measure page load time', () => {
    cy.window().then((win) => {
      const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart;
      cy.log(`Page load time: ${loadTime} ms`)
      // Check if the load time is within an acceptable range
    })
  })
})


describe('Responsive Tests', () => {
  it('Mobile Device Responsiveness', () => {
    cy.viewport('iphone-8')
    cy.visit('/')
    // Test visibility and layout of elements on a mobile device
  })

  it('Tablet Responsiveness', () => {
    cy.viewport('macbook-15')
    cy.visit('/')
    // Test visibility and layout of elements on a tablet
  })

  it('Desktop Screen Responsiveness', () => {
    cy.viewport(1280, 720) // Adjust size as needed
    cy.visit('/')
    // Test visibility and layout of elements on a desktop screen
  })
})


describe('Testing the endpoint', () => {
  it('Should return the correct response', () => {
    // Send an HTTP request to the endpoint
    cy.request('GET', '/login')
      .then((response) => {
        // Check if the response has the expected status code
        expect(response.status).to.eq(200)
      })
  })
})


describe('Accessibility Tests', () => {
  it('Should pass accessibility tests', () => {
    // start accessibility tests
    cy.injectAxe() // This is example - customize options
    cy.checkA11y(null, { includedImpacts: ['critical'] }) // This is example - customize options
  })
})


describe('Task Tests', () => {
  it('Use Task', () => {
    cy.task('hello', { greeting: 'Hello', name: 'World' })
    .visit('/')
  })
})


describe('Intercept Tests', () => {
  it('Use Intercept', () => {
    cy.intercept('GET', '/login').as('getAllUsers')
    cy.intercept('POST', '/login').as('createUser')
    cy.intercept('POST','/login', { fixture: 'example.json' }).as('createUserWithFixture')
    cy.visit('/login')
    cy.wait('@getAllUsers')
  })
})


describe('Checking buttons', () => {
  it('correct operation of buttons', () => {
    cy.get('.card').eq(0).click()
      .get('.navbar-brand').click()
      .get('.card').eq(1).click()
      .get('.navbar-brand').click()
      .viewport('iphone-8')
      .get('.navbar-toggler').click()
      .viewport(1280, 720)
      .get('.nav-link').eq(0).click()
      .get('.navbar-brand').click()
      .get('.nav-link').eq(1).click()
      .get('.navbar-brand').click()
      .get('.card').eq(0).click()
      .get('.nav-link').eq(0).click()
      .get('.card').eq(0).click()
      .get('.nav-link').eq(1).click()
      .get('.navbar-brand').click()
      .get('.card').eq(1).click()
      .get('.nav-link').eq(0).click()
      .get('.card').eq(1).click()
      .get('.nav-link').eq(1).click()
  })
})