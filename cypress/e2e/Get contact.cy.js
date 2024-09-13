//*API Test Cases*


describe('Get Contacts', () => {
it('returns a list of contacts', () => {
cy.request('GET', '/contacts')
.should((response) => {
expect(response.status).to.eq(200)
expect(response.body).to.be.an('array')
})
})
})


describe('Create Contact', () => {
it('creates a new contact', () => {
const contact = { name: 'John Doe', email: 'johndoe@example.com' }
cy.request('POST', '/contacts', contact)
.should((response) => {
expect(response.status).to.eq(201)
expect(response.body).to.have.property('id')
})
})
})
