describe('Performance Test', () => {
    it('loads the contact list within 2 seconds', () => {
    cy.visit('/contacts')
    .should((response) => {
    expect(response.duration).to.be.lessThan(2000)
    })
    })
    })
    
//security testing
    
    describe('XSS Test', () => {
    it('prevents XSS attacks', () => {
    const maliciousInput = '<script>alert("XSS")</script>'
    cy.visit('/contacts')
    .get('input[name="name"]')
    .type(maliciousInput)
    .should((response) => {
    expect(response.body).not.to.contain(maliciousInput)
    })
    })
    })