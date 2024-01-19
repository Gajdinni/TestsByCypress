describe('LoadTimeout', () => {
    it('Correct', () => {
      // Wait 30 seconds for page 'load' event
     cy.visit('/login', { timeout: 30000 })
    })
  })


describe('Performance Tests', () => {
    it('Measure page load time', () => {
    cy.window().then((win) => {
        const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart
    cy.log(`Page load time: ${loadTime} ms`)
    // Check if the load time is within an acceptable range
    })
  })
})