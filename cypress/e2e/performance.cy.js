describe("LoadTimeout", () => {
  it("Correct", () => {
    // Wait 30 seconds for page 'load' event
    cy.visit("/login", { timeout: 30000 });
  });
});

describe("Performance Tests", () => {
  it("Measure page load time", () => {
    cy.window().then((win) => {
      const navigationStart = win.performance.timing.navigationStart;
      const loadEventEnd = win.performance.timing.loadEventEnd;
      const responseEnd = win.performance.timing.responseEnd;
      const domContentLoaded = win.performance.timing.domContentLoadedEventEnd;

      const pageLoadTime = loadEventEnd - navigationStart;
      // Calculate page load time

      cy.log(`Page load time: ${pageLoadTime} ms`);
      // Check if the load time is within an acceptable range
      cy.log(`Response Time: ${responseEnd - navigationStart} ms`);
      cy.log(
        "DOM Content Loaded Time: ${domContentLoaded - navigationStart} ms"
      );
      // Adjust values based on your requirements performance

      expect(pageLoadTime).to.be.lessThan(5000);
      // Load time should be less than 5 seconds
      expect(responseEnd - navigationStart).to.be.lessThan(3000);
      // Response time should be less than 3 seconds
      expect(domContentLoaded - navigationStart).to.be.lessThan(3000);
      // DOM Content Loaded time should be less than 3 seconds
    });
  });
});

describe("Load simulation test", () => {
  it("Simulates load by clicking a button multiple times", () => {
    cy.visit("/");
    cy.wrap(Array(10).fill(null)).each(() => {
      cy.contains("Home").click();
    });
    cy.wrap(Array(10).fill(null)).each(() => {
      cy.contains("StyleBuzz").click();
    });
  });

  it("Same but use Selector", () => {
    cy.clickManyTimes();
  })
  // simulate many click on the buttons
  // (more than 20 in one test == error [in this website])
});
