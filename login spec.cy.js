 //Test case1- Valid loginStandard User Login 
 describe('Standard User Login', () => {
    const username = 'standard_user';
    const password = 'secret_sauce';
    
    it('successfully logs in with valid credentials', () => {
      cy.visit('www.saucedemo.com');
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
     // cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service');  
    cy.timeout (['time-out'], 10000)
    cy.timeout('#username',{timeout:4000});
   });
    });